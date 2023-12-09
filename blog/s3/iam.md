---
layout: layout.njk
title: IAM for an S3 Bucket
tags: blog
---

> Disclaimer: This is for a weekend project, not an enterprise organization. 
> You'll see use of `*` here in IAM policies.
> As Chief Executive Officer of my stupid weekend project, I have been briefed by our Chief Information Officer of this stupid weekend project (also me) and I (as CEO) have accepted the associated risks. 
> I (as CIO) do not approve, but I remain committed to support stupid weekend project in any way I can, until our Chief Technology Officer (also me) is able to assign someone (let's face it - me) to build thoughtful people-centric security IAM policies for stupid weekend project.

## Allow Editing S3 Buckets

I created the basic IAM group I need with `setup.iam.s3site.yml`:

This Ansible playbook applies the policy in `iam_edit_s3.j2`:

```json
{% include 'examples/ansible/files/iam_edit_s3.j2' %}
```

Note that, as usual, this playbook must be run with the `s3bucket` variable set.

```shell
ansible-playbook -e "s3bucket=edthe.dev" setup.iam.s3site.yml
```

## Allow use of S3 Bucket Editing Software

I also find that any user who needs to edit an S3 bucket is going to want to use a piece of editing software, which should typically use an access key. Rather than assign an access key, I grant permissions to users to manage their own in `setup.iam.accesskeys.yml`:

```yaml
{% include 'examples/ansible/setup.iam.accesskeys.yml' %}
```

This playbook applies the policy in `iam.allow.accesskeys.json`.

```json
{% include 'examples/ansible/files/iam.allow.accesskeys.json' %}
```

```shell
ansible-playbook setup.iam.accesskeys.yml
```

> Note: For once we don't need a bucket name, as this creates an independant role I assign to AWS Console IAM users to allow them to manage their own Access Keys.

Once these are run, I manually assign the new `self_manage_access_keys` and `edit_edthe.dev` groups to my S3 bucket editors in AWS IAM.
