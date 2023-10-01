---
layout: layout.njk
title: IAM for Route 53 DNS by Edward Delaporte
---

## Disclaimer

> Disclaimer: This is for a weekend project, not an enterprise organization. 
> You'll see use of `*` here in IAM policies, because this is for stupid weekend projects.

## Editing DNS Records

Being married to a top DevOps practitioner, I decided I had better delegate ability to modify DNS records for our shared domain name.

Here's the Ansible Playbook:

```yaml
{% include 'ansible/setup.iam.dns.yml' %}
```

And here's the AWS Policy File Jinja2 template:

```json
{% include 'ansible/iam.dns.j2' %}
```
