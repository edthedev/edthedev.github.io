---
layout: blog.njk
title: Backup MineTest Worlds with Synology
tags: ['blog', 'rss']
date: 2024-03-01
---

## About 

It wasn't obvious how to backup my local `MineTest` world files using my Synology Network Attached Storage (NAS), so here's the recipe that worked for me.

Note that my host machine is Linux. You may need to modify this recipe for Windows or Mac.

## The Challenge

> Synology Client will not Sync Hidden Folders
> and `.minetest` is hidden.

## The Solution

While MineTest is *not running*, move the world files:

```sh
mv ./.minetest/ minetest                        
ln -s ./minetest/ .minetest   
```

Alternately, if installed via `flatpak`:

```sh
MINETEST_HOME=$HOME/.var/app/net.minetest.Minetest/.minetest
mv $MINETEST_HOME $HOME/minetest
ln -s $HOME/minetest $MINETEST_HOME
```

Then confirm with:
```sh
$ ls $MINETEST_HOME
cache  client  config  data  debug.txt  minetest.conf  mods  worlds
$ ls -al ~/.var/app/net.minetest.Minetest/.minetest
lrwxrwxrwx 1 foo foo 21 May 29 22:15 /home/foo/.var/app/net.minetest.Minetest/.minetest -> /home/foo/minetest
```

Now in the Synology client, setup a 'Backup Task' of `~/minetest/worlds`.

- Be sure to use a scheduled task, not continuous backup. You do not want the system struggling to update the Synology while playing.