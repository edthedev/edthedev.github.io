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

Now in the Synology client, setup a 'Backup Task' of `~/minetest/worlds`.

- Be sure to use a scheduled task, not continuous backup. You do not want the system struggling to update the Synology while playing.