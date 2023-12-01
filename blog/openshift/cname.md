---
layout: blog.njk
title: Add custom URL for the OpenShift console - Edward.Delaporte.us
tags: blog
---

## Context

OpenShift seems neat, but `<blink>`OH MY GOODNESS! `</blink>` - that console URL it generated is not something I am going to remember.

While my console is conveniently served by default from `console-openshift-console.apps.openshift.mydomain.com`, I'm not going to remember that, and I am honor-bound by my blood oath never to use a bookmark manager. (It's a long story.)

Whatever my reasons, I would rather visit `console.mydomain.com`, and so we were forcd to resort to DNS chicanery.

## Add a CNAME record

Lookup the default router URL

  1. In OpenShift, go to `Networking` -> `Routes`

  2. Near the top, select the `openshift-console` project.

  3. Click into the route named `console`

  4. Scroll down and find (and copy) the `Router canonical hostname`

  5. Keep this tab open, you will refer back to it later.

Add a `CNAME` record pointing to the default router URL

  6. Visit your DNS provider

  7. Add a CNAME record from your chosen external URL - i.e. `console.mydomain.com` to your router canonical hostname - i.e. `router-default.apps.clustername.mydomain.com`

  8. Get a drink. DNS records take time to propegate.

  9. Confirm that visiting `console.mydomain.com` gives you the (for the moment) expected `503 - Service Not Available` error.

## Add the OpenShift route

Add the new domain name as a route in OpenShift

1. In OpenShift, go to `Networking` -> `Routes`

2. Near the top, select the `openshift-console` project.

3. Add a route.

  Set the name to anything, and set the URL to the domain that you used in the CNAME record.

    Name: anything
    Hostname: console.mydomain.com

  Copy the rest of the settings from the route named `console`. Probably looks something like this:

    Path: /
    Service: console
    Target port: <choose the only option>
    Security: Check `secure route`
    TLS termination: Re-encrypt
    Insecure traffic: Redirect

4. Confirm that visiting `console.mydomain.com` takes you to your openshift console.

  > Tip: Auth that you setup before should still work, but will redirect you back to the original console URL, which still works fine, thanks to the original console route.

You could probably re-setup auth to redirect back to the new nicer domain, but I do not care enough to try it.