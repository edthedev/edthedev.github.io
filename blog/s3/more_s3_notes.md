---
layout: blog.njk
title: More on Creating a MicroSite on AWS S3
eleventyNavigation:
  key: Blog 
  order: 80
---

## Serve a static website from an S3 Bucket

I created `setup.s3site.yml`.

This play requires crafting an IAM access policy to allow serving the S3 bucket publicly:

> Note: `www.public_s3.j2` is a Jinja2 template, which takes `s3bucket` as a variable from our playbook. We will specify this variable on the command line so that the play can be re-used for future buckets.

Which I run with a helper script.

Then I did a bunch of non-repetivite stuff manually in  the AWS Web Console:

- Point my domain registrar NameSevers for `edthe.dev` to the name servers listed in my Route53 hosted zone for `edthe.dev`.

```
    ns-number.awsdns-number.com.
    ns-number.awsdns-number.org.
    ns-number.awsdns-number.co.uk.
    ns-number.awsdns-number.net.
```

- Request an SSL Certificate in `AWS Certificate Manager` that covers `edthe.dev` and `www.edthe.dev`.
- Do the [DNS Domain Ownership verification dance](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html).

> Tip: Do not remove the certificate ownership DNS records. I have heard it is helpful to still have when the SSL Certificate needs renewed.

- Create 2 CloudFront instances, one for `edthe.dev` and one for `www.edthe.dev`.
- Be sure to assign each CloudFront instance the appropriate `alternate domain` i.e. `www.edthe.dev`.
- Assign each CloudFront instance the SSL Certificate.
- Add A and AAAA records for `www.edthe.dev` pointing to the `www.edthe.dev` CloudFront distribution.

```dns
    www.edthe.dev	A	Simple	-	1stbunchofletters.cloudfront.net.
    www.edthe.dev	AAAAA	Simple	-	1stbunchofletters.cloudfront.net.
```

- Add A and AAAA records for `edthe.dev` pointing to the `edthe.dev` CloudFront distribution.

```dns
    edthe.dev	A	Simple	-	2ndbunchofletters.cloudfront.net.
    edthe.dev	A	Simple	-	2ndbunchofletters.cloudfront.net.
```

Now my site exists, but I still need [a way to modify my AWS S3 Bucket contents](/code/iam/).

When it was time to set this up a second time for the domain I share with my spouse, I decided it would be wise to [delegate access to manage AWS Route 53 DNS](/code/iam.dns/) to my spouse.
