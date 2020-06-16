# Ansible Tower and vCenter Filters
The [Ansible Tower vCenter Inventory documentation](https://docs.ansible.com/ansible-tower/latest/html/userguide/inventories.html#id5) does not specify the syntax to be used for filtering hosts in a dynamic inventory.
I found a hint in a [GitHub Issue](https://github.com/ansible/awx/issues/386#issuecomment-340333493).
The vmware community script as it currently is packaged in Tower does not support filtering on tags.
The VMware community script does support filtering on the guest object name in vSphere.

Exact match example:
```
name == "exactmatch"
```

Partial match example:
```
"partialmatch" in name
```
