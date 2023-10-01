---
layout: blog.njk
title: DNS for a static website on AWS S3
eleventyNavigation:
  key: Blog 
  order: 80
---

## Setup S3 Buckets

First I had to [setup static website s3 buckets](/blog/s3/).

## Serve a static website from an S3 Bucket

Do a bunch of non-repetivite stuff manually in  the AWS Web Console:

1. Point my domain registrar NameSevers for `edthe.dev` to the name servers listed in my Route53 hosted zone for `edthe.dev`.

    ```
        ns-number.awsdns-number.com.
        ns-number.awsdns-number.org.
        ns-number.awsdns-number.co.uk.
        ns-number.awsdns-number.net.
    ```

1. Request an SSL Certificate in `AWS Certificate Manager` that covers `edthe.dev` and `www.edthe.dev`.

1. Do the [DNS Domain Ownership verification dance](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html).

    > Tip: Do not remove the certificate ownership DNS records. I have heard it is helpful to still have when the SSL Certificate needs renewed.

1. Create 2 CloudFront instances, one for `edthe.dev` and one for `www.edthe.dev`.
1. Be sure to assign each CloudFront instance the appropriate `alternate domain` i.e. `www.edthe.dev`.
1. Assign each CloudFront instance the SSL Certificate.
1. Add A and AAAA records for `www.edthe.dev` pointing to the `www.edthe.dev` CloudFront distribution.

    ```dns
        www.edthe.dev	A	Simple	-	1stbunchofletters.cloudfront.net.
        www.edthe.dev	AAAAA	Simple	-	1stbunchofletters.cloudfront.net.
    ```

1. Add A and AAAA records for `edthe.dev` pointing to the `edthe.dev` CloudFront distribution.

    ```dns
        edthe.dev	A	Simple	-	2ndbunchofletters.cloudfront.net.
        edthe.dev	A	Simple	-	2ndbunchofletters.cloudfront.net.
    ```

## Related Tasks

Now my site exists, but I still need [a way to modify my AWS S3 Bucket contents](/blog/s3/).

When it was time to set this up a second time for the domain I share with my spouse, I decided it would be wise to [delegate access to manage AWS Route 53 DNS](/code/iam.dns/) to my spouse.
