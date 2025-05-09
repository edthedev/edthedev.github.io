---
layout: blog.njk
title: DNS for a static website on AWS S3
tags: ['blog', 'rss']
date: 2023-12-01
---

## Setup S3 Buckets

First I had to [setup static website s3 buckets](/blog/s3/).

Anywhere you see `edthe.dev` and `www.edthe.dev`, substitute your own apex domain name (i.e. `yourdomainname.com`) and your `www.` subdomain (i.e. `www.yourdomainname.com`).

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

    - Be sure to choos `Validaton Method: DNS validation`
    - Accept the default `Key algorithm`

1. Do the [DNS Domain Ownership verification dance](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html).

    - The easiest way to do this is to ignore the detailed guide and instead click into the pending request in `Certificate Manager - Certificates` and scroll down. There should be a button that basially says `Add DNS Records to Route 53 for me`. I typically push that button, and go grab a coffee.
    > Tip: Do not remove the certificate ownership DNS records. I have heard it is helpful to still have when the SSL Certificate needs renewed.

1. Create 2 CloudFront instances, one for `edthe.dev` and one for `www.edthe.dev`.

    - Select `edthe.dev` or `www.edthe.dev` for the `Origin Domain`. You will do this twice, once for each of your apex domain, and your `www.` sub-domain.
    - Leave any option not mentioned here with the default values.
    - Under `Viewer Protocol Policy`, select `Redirect HTTP to HTTPS`.
    - Under `Web Application Firewall (WAF)` choose `Do not enable security protections`. A static website is immune to the attacks that a WAF protects against.
    - Be sure to assign each CloudFront instance the appropriate `alternate domain name (CNAME)` i.e. `www.edthe.dev`.
    > Tip: `alternate domain` is incredibly hard to find, but critical. Scroll back and forth up the page until you find it.
    - Under `Custom SSL Cetificate - optional`, choose the SSL Certificate you requested earlier. It should be the only option in the list.
    > Tip: If your SSL Certificate is not yet available, double check the steps above, and then just take a 20 minute coffee break.

1. Assign each CloudFront instance the SSL Certificate.
1. Add A and AAAA records for `www.edthe.dev` pointing to the `www.edthe.dev` CloudFront distribution.

    ```dns
        www.edthe.dev	A	Simple	-	1stbunchofletters.cloudfront.net.
        www.edthe.dev	AAAAA	Simple	-	1stbunchofletters.cloudfront.net.
    ```

    > Tip - the same `(bunch of letters).cloudfront.net` goes in both of these DNS record's `value` field.

1. Add A and AAAA records for `edthe.dev` pointing to the `edthe.dev` CloudFront (CDN) distribution.

    ```dns
        edthe.dev	A	Simple	-	2ndbunchofletters.cloudfront.net.
        edthe.dev	A	Simple	-	2ndbunchofletters.cloudfront.net.
    ```

    > Tip - the same `(bunch of letters).cloudfront.net` goes in both of these DNS record's `value` field, as each-other, **but the value is different** than the `value` in the previous step for `www.`. This is because the `CDN` for `edthe.dev` and the `CDN` for `www.edthe.dev` are different.

## Related Tasks

Now my site exists, but I still need [a way to modify my AWS S3 Bucket contents](/blog/s3/).

When it was time to set this up a second time for the domain I share with my spouse, I decided it would be wise to [delegate access to manage AWS Route 53 DNS](/code/iam.dns/) to my spouse.
