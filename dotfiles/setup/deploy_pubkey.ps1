Param(
	[string]$hostname
)

scp ~/.ssh/id_rsa.pub ${hostname}:~/
ssh $hostname -C 'cat ~/.ssh/new_key.pub >> ~/.ssh/authorized_keys'
