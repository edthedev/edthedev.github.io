---
layout: blog.njk
title: Backup Monitoring
tags: ['blog']
date: 2024-06-08
---

## Setup

Mount the Samba Share

```sh
sudo apt install cifs-utils psmisc
sudo mount -t cifs -o username=$NAS_USER,password=$NAS_PASSWORD //$NAS_IP/home/ /mnt/nas/home
```

Install `checkback`:

```sh
go install github.com/edthedev/checkback
which checkback
```

## Manual Check

```sh
checkback -path /mnt/nas/home/Backup/blaster/home/edward/minetest/worlds/SurfaceWorld/map.sqlite
```

## Add to WTFUtil

Add to WTFUtil config file:

```yaml
mods:
    check_backups:
      title: "Backups"
      cmd: "checkback"
      args: ["-path", "/mnt/nas/home/Backup/blaster/home/edward/minetest/worlds/SurfaceWorld/map.sqlite"]
      enabled: true
```