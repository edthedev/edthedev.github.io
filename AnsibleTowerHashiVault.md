In terminal:
```
export VAULT_ADDR=<yourvaultcluster>:8200
export VAULT_NAMESPACE=Ansible
```

Authenticate to Vault as an administrative user:
```
vault login -method userpass username=<user>
```

Determine which policies I have:
```
vault token lookup
```

Determine which paths I can access based on my policies:
```
vault policy read admins (or other policy you have on your token)
```

Add kv-v2 secrets engine to a path I can write to:
```
vault secrets enable -path secret/ansible kv-v2
```

Put a secret in the path and read it:
```
vault kv put secret/ansible/toweragent test=success
vault kv get secret/ansible/toweragent
vault kv get -field=test secret/ansible/toweragent   
```

Create a policy file (for the Tower server to access the secrets under secret/ansible/):

`vim ansible-vault.hcl`

```
path "secret/ansible/*"
{
  capabilities = ["create", "read", "update", "delete", "list"]
}
path "secret/data/ansible/*"
{
  capabilities = ["create", "read", "update", "delete", "list"]
}
```
 
Write a policy from the file:
```
vault policy write ansible ansible-vault.hcl
```

Create an approle:
Set CIDR block for the approle:
```
vault auth enable approle
vault write auth/approle/role/ansibletower \
> token_ttl=60m \
> token_max_ttl=24h \
> policies="ansible" \
> secret_id_bound_cidrs="<yourTowerServerCIDR>" \
> token_bound_cidrs="<yourTowerServerCIDR>"
```

Get the role-id:
```
vault read auth/approle/role/ansibletower/role-id
```

Generate a secret-id from the role:
```
vault write -f auth/approle/role/ansibletower/secret-id
```

# Steps on Tower
On Tower, become awx user:

sudo su - awx
cd /etc/vault.d
mkdir tower
cd tower/
 
Write the Vault Agent config file:
`vim vault-agent.hcl`
```
exit_after_auth = false
pid_file = "./pidfile"

listener "tcp" {
   address = "127.0.0.1:8200" #Use "127.0.0.1:8100" for local dev-server or for port collisions.
   tls_disable = true
}

auto_auth {
  method "approle" {
    namespace = "Ansible-Namespace"
    config = {
      role_id_file_path = "/etc/vault.d/tower/approle/roleID"
      secret_id_file_path = "/etc/vault.d/tower/approle/secretID"
      remove_secret_id_file_after_reading = false
    }
   }

   sink "file" {
       config = {
           path = "/etc/vault.d/tower/vault_token"
       }
   }
}

vault {
   address = "<yourvaultcluster>:8200/"
}

template {
   source = "/etc/vault.d/tower/approle/tower_creds.ctmpl"
   destination = "/etc/vault.d/tower/tower_creds.json"
   perms = 0600
}
```
 
Set up the Role-ID and Secret-ID
```
vim approle/secretID (paste only the secret-id at the configured secret_id_file_path)
vim approle/roleID (past only the role-id at the role_id_file_path)
```

Write the vault template:

This example writes the Vault secret at secret/ansible/toweragent key=test into a file.
The destination file is defined in the Vault Agent config template section.
```
vim approle/tower_creds.ctmpl
{{- with secret "secret/ansible/toweragent" -}}
{{- if .Data.data -}}
{{ .Data.data.test }}
{{- end -}}
{{- end -}}
```
