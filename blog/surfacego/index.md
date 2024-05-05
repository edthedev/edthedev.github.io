---
layout: blog.njk
title: Linux on my Surface Go
tags: ['blog']
date: 2023-12-15
---

## Overview

I chose Ubuntu because I want to play Steam games.

I have really wanted to install Linux on the Surface Go from the day I bought it, but I did not feel confident that the drivers and work-arounds would be available, until today.

I bought the Surface Go for the delightful hardware design, not for the operating system that ships with it. I find Windows 10 to be perfectly tolerable. I used Windows 10 on my Surface Go for about six years.

My biggest motive for staying with Windows was Steam games, and my biggest motive for swithing is - Steam games.

Over the years I have owned a Surface Go, my Windows install has gotten slower, while my Steam game library compatibility with Linux has gotten stronger. 

I recently realized I was not choosing to play any games at all, and I was frustrated by lag during text editing and web browsing. So it was time to make the switch!

My notes follow. This is meant to be an overview, not a perfect guide. There are better step-by-step guides out there already. Read this if you're trying to get a sense of how much work the change will be, and how it went for me.

## Preparation

1. I used Pendrive Linux to create a bootable USB stick with Ubuntu 20.04.
2. I looked up my BitLocker Encryption key in my personal Microsoft account.
3. I disabled BitLocker encryption in Windows, because I didn't want to type in my BitLocker key after every reboot.
4. I did a bunch of bios/UEFI dancing (hold Volume-Down during boot) to (temporarily) disable secure boot, and to bump USB up in the boot order.
5. I backed up my OEM Windows 10 key, in case I want to restore Windows.

	> Tip: Don't be like me, apply the latest firmware updates through Windows before you start.
	> I may end up re-installing Windows in dual boot, just to apply some firmware updates.

## Installation

I booted to the PenDrive Linux, chose Ubuntu, and `Install Ubuntu`. I selected `Minimal Install`, because I am *very* familiar with available Linux applications, and I am quite picky about which ones I will add later.

## Fixes

I knew before I started that this was going to take some work to get working just right, because the Surface Go is a unique piece of hardware. The unique hardware is why I bought it! 

My dream is to someday own a fully open and repairable equivalent computer, like an idealized future verson of the `Framwork` laptop. But the efficient and economical thing to do today is to upgrade what I already have.

### Installed the extra-special surface linux kernel

I followed the instructions at the [Linux Surface Go Kernel][kernel] GitHub repo.
It looks like this when done.

[kernel]: https://github.com/linux-surface/linux-surface

```bash
$ uname -a
	Linux mycomputer 6.6.1-surface-1 ...etc...
```

### The Wireless Fix

I followed this [terrific guide on Reddit to Wifi on Surface Go][WifiGo]. It was written for Ubuntu 18.10, but it worked for me on Ubuntu 20.04 LTS.

I used a cheap USB wifi adapter in order to find and read that guide, of course. Ubuntu has great support for no-name USB wifi dongles.

[WifiGo]: https://www.reddit.com/r/SurfaceLinux/comments/9t53gq/wifi_fixed_on_surface_go_ubuntu_1810/

### Add some repositories

I added some repositories for `SurfaceLinux` and `VSCodium`.

```sh
deb [arch=amd64] https://pkg.surfacelinux.com/debian release main
deb [signed-by=/usr/share/keyrings/vscodium.gpg] https://download.vscodium.com/debs vscodium main
```

## Initial Reactions


It's so fast! Windows 10 was snappy when I first bought it, but had gotten slow with time and usage.
