---
layout: blog.njk
title: Create a MicroSite on AWS S3
tags: ['blog', 'rss', 'topic_index']
date: 2024-03-30
---

How to setup a micro-site on AWS S3 with custom DNS.

## Create the needed S3 Buckets

This is going to create `www.`, `logs.` and apex domain S3 buckets.

- The `www.` bucket holds your site content.
- The `logs.` bucket holds access logs for your site.
- The apex domain bucket just serves a redirect to `www.`

> Do I have to have the `www.`? Yes.

```bash
SITE=edthe.dev
ansible-playbook -e "s3bucket=$SITE" s3site_1_create_buckets.yml
```

```yaml
{% include 'examples/ansible/s3site_1_create_buckets.yml' %}
```

## Manual Step: Go 'allow public access'

Now go do a manual change, because security teams say we cannot have nice things.

> In the new `www.` bucket, and the apex domain bucket, find and uncheck 'Block *all* public access'.

> Once that is done, this command (which will otherwise fail in the next playbook) should succeed.

  ```bash
  aws s3api put-bucket-policy --bucket "www.$SITE" --policy "file:///tmp/www.$SITE.acl.json"
  ```

## Enable public access 

This command will enable public access to the `www.` and apex S3 buckets.

```bash
ansible-playbook -e "s3bucket=$SITE" s3site_2_allow_public_access.yml
```

```yaml
{% include 'examples/ansible/s3site_2_allow_public_access.yml' %}
```

### Verify public access

You can verify this worked by visiting the URL you under `Bucket website hosting` in the `www.` bucket.Find in under `Properties -> Static website hosting`.

If you get a `404 Not Found`, double check that you provided an `index.html` file, and a `errors/404.html` file.

## Logging

Now we use the AWS console again to enable controlling the logs bucket with Ansible. 

In `logs.` find `Edit Object Ownership` and set it to `ACLs Enabled`.
This is probably some kind of legacy thing, but this whole process is already a pain, and we are not building an enterprise here.

Now run the next playbook:

```bash
ansible-playbook -e "s3bucket=$SITE" s3site_3_add_logging.yml
```

```yaml
{% include 'examples/ansible/s3site_3_add_logging.yml' %}
```


## Allow your IAM users to update the S3 bucket

This step will create an IAM group that grants access to modify the contents of your new shiny `www.` S3 bucket. 

It will also grant members of the IAM group the ability to generate their own access keys, which they need if they are going to use a program like VSCode to maintain the files in the S3 bucket.

You will add your existing IAM user to this group manually as a final step.

```bash
ansible-playbook -e "s3bucket=$SITE" s3site_4_create_iam_group.yml
```

```yaml
{% include 'examples/ansible/s3site_4_create_iam_group.yml' %}
```

## Setup DNS

Next up, [setup DNS for a static website on S3](/blog/s3/dns/).
