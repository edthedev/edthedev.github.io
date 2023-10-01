---
layout: layout.njk
title: Setup Ansible on Ubuntu
---

## Setup Ansible

Here's how I set up Ansible on Ubuntu.

```shell
python -m venv ansible_venv
source ansible_venv/bin/activate
pip3 install ansible
ansible-galaxy collection install community.aws
pip3 install boto3
```