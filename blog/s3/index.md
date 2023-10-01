---
layout: blog.njk
title: Microsites - Edward.Delaporte.us
eleventyNavigation:
  key: Blog 
  order: 80
---

How to setup a micro-site on AWS S3 with custom DNS.

I don't actually recommend this recipe, or S3. It is a royal pain.

But here's some stuff that will help.

## Create the needed S3 Buckets

This is going to create `www.`, `logs.` and apex domain S3 buckets.

- The `www.` bucket holds your site content.
- The `logs.` bucket holds access logs for your site.
- The apex domain bucket just serves a redirect to `www.`

> Do I have to have the `www.`? Yes.

```bash
ansible-playbook -e "s3bucket=edthe.dev" s3site_1_create_buckets.yml
```

## Manual Step: Go 'allow public access'

Now go do a manual change, because security teams say we cannot have nice things.

> In the new `www.` bucket, and the apex domain bucket, find and uncheck 'Block *all* public access'.

Once that is done, this command (which will otherwise fail in the next playbook) should succeed.

```bash
aws s3api put-bucket-policy --bucket 'www.edthe.dev' --policy 'file:///tmp/www.edthe.dev.acl.json'
```

## Enable public access 

This command will enable public access to the `www.` and apex S3 buckets.

```bash
ansible-playbook -e "s3bucket=edthe.dev" s3site_2_allow_public_access.yml
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
ansible-playbook -e "s3bucket=edthe.dev" s3site_3_add_logging.yml
```
