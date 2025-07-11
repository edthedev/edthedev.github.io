---
layout: blog.njk
title: Running a Luanti Server
tags: ['blog', 'rss']
date: 2025-07-04
---

## About

Luanti is fun with friends. I have found hosting a dedicated Luanti server to be substantially simpler than MineCraft Java Edition.

The first class support for mods in the Luanti game engine really shines here - in all the steps not included in these instructions.

## Steps

Step 1: Install Luanti

```
flatpak install net.minetest.Minetest
flatpak list | grep Luanti
```

Step 2: Interactively setup MineGame

- Run Luanti
- Add the `minegame` game
- Install some [Luanti Mods](/blog/minetest/mods/).
- Generate a world

Step  3: Run as a headless server

To run as a server:

```sh
/usr/bin/flatpak run net.minetest.Minetest --server --gameid minetest --worldname SurfaceWorld --terminal
```

Step 4: Various Network Stuff

- [Allowing External Players to Connect](https://wiki.minetest.net/Setting_up_a_server#Allowing_external_players_to_connect)

## Troubleshooting

Unless otherwise specified, these commands assume a `Debian` server, and are typed into a command line console on the `Debian` server.

1. What is the server IP addresss for players on my home network? 

```sh
ip addr | grep 192.168
```

> `ip addr` tells you a bunch of information about your network connection.
> `192.168.X.Y` is what the local IP address, within your home network, typically looks like.

2. Have I got that port right?

To see what Ports are in use:

```sh
lsof -i -n -P | grep 30000
```

> We typically expect port 30000 to be in use, by Luanti

3. What IP address should my remote friends connet to?

>Tip: This assumes that the linked networking configurations above have all been completed.

```sh
curl ifconfig.me
```

> Tip: If your PC has both Wifi and a wire connection, the networking bits may be simpler to accomplish with WiFi disabled.
>
> ```sh
> nmcli radio wifi off
> nmcli radio wifi on
> ```

