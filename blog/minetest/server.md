---
layout: blog.njk
title: Running a MineTest Server
tags: ['blog', 'rss']
date: 2024-05-05
---

## About

MineTest is fun with friends. I have found hosting a dedicated MineTest server to be substantially simpler than MineCraft Java Edition. 

The first class support for mods in the MineTest game engine really shines here - in all the steps not included in these instructions.

## Steps

Step 1: Install MineTest

```sh
sudo apt install minetest
```

Step 2: Interactively setup MineGame

- Run MineTest
- Add the `minegame` game
- Install some [MineTest Mods](/blog/minetest/mods/).
- Generate a world

Step  3: Run as a headless server

To run as a server:

```sh
minetest --server --gameid minetest --worldname SurfaceWorld --terminal
```

Step 4: Various Network Stuff

- [Allowing External Players to Connect](https://wiki.minetest.net/Setting_up_a_server#Allowing_external_players_to_connect)

## Troubleshooting

Unless otherwise specified, these commands assume a `Debian` server, and are typed into a command line console on the `Debian` server.

What is the server IP addresss for players on my home network? 

```sh
ip addr | 192.168
```

> `ip addr` tells you a bunch of information about your network connection.
> `192.168.X.Y` is what the local IP address, within your home network, typically looks like.

To see what Ports are in use:

```sh
lsof -i -n -P | grep 30000
```

> We typically expect port 30000 to be in use, by MineTest
