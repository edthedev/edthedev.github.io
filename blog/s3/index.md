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

```bash
ansible-playbook -e "s3bucket=thegrowingground.com" setup.s3site.yml
```