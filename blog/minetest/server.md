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

On Debian, to see what Ports are in use:

```sh
lsof -i -n -P
```

> We typically expect port 30000 to be in use, by MineTest
