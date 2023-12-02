---
layout: blog.njk
title: Linux on my Surface Go - Edward.Delaporte.us
tags: ['blog']
---

## Overview

Ubuntu! - Because Steam!

## Preparation

1. I used Pendrive Linux to create a bootable USB stick with Ubuntu 20.04.
2. I looked up my BitLocker Encryption key in my personal Microsoft account.
3. I disabled BitLocker encryption in Windows, because I didn't want to type in my BitLocker key after every reboot.
4. I did a bunch of bios/UEFI dancing (hold Volume-Down during boot) to (temporarily) disable secure boot, and to bump USB up in the boot order.
5. I backed up my OEM Windows 10 key, in case I want to restore Windows.

	> Tip: Don't be like me, apply the latest firmware updates through Windows before you start.
	> I may end up re-installing Windows in dual boot, just to apply some firmware updates.

## Installation

I booted to the PenDrive Linux, chose Ubuntu, and `Install Ubuntu`.

## Fixes

### Installed the extra-special surface linux kernel


9. Confirm

	```bash
	$ uname -a
        Linux mycomputer 6.6.1-surface-1 ...etc...
	```

### The Wireless Fix

I followed this [terrific guide on Reddit to Wifi on Surface Go][WifiGo]. It was written for Ubuntu 18.10, but it worked for me on Ubuntu 20.04 LTS.

I used a cheap USB wifi adapter in order to find and read that guide, of course. Ubuntu has great support for no-name USB wifie dongles.

[WifiGo]: https://www.reddit.com/r/SurfaceLinux/comments/9t53gq/wifi_fixed_on_surface_go_ubuntu_1810/

### Add some repositories

```sh
deb [signed-by=/usr/share/keyrings/vscodium.gpg] https://download.vscodium.com/debs vscodium main
deb [arch=amd64 signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/amd64 stable main
deb [arch=amd64] https://pkg.surfacelinux.com/debian release main
deb [signed-by=/usr/share/keyrings/vscodium.gpg] https://download.vscodium.com/debs vscodium main
```


## Initial Reactions

It's so fast! Windows 10 was snappy when I first bought it, but had gotten slow with time and usage.

