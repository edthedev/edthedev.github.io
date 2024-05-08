---
layout: blog.njk
title: Messing with Grub
tags: ['blog', 'rss']
date: 2024-05-08
---

## Why

Lately Grub won't blindly identify and add that shiny new bootable USB that I want to try out.

## What

`sudo vi /etc/default/grub`

`GRUB_DISABLE_OS_PROBER=false`

Now reboot.

## Cleanup

Grub should be updated now, so we can save some boot time, and improve security, by undoing our change.

`sudo vi /etc/default/grub`

`GRUB_DISABLE_OS_PROBER=true`
