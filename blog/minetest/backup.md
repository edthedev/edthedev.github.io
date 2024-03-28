---
layout: blog.njk
title: Backup MineTest Worlds with Synology
tags: blog
---

> Synology Client will not Sync Hidden Folders
> and `.minetest` is hidden.

Be sure that MineTest is not running, and move the world files:

```sh
mv ./.minetest/ minetest                        
ln -s ./minetest/ .minetest   
```

Now in Synology client, setup a 'Backup Task' of `~/minetest/worlds`.

- Be sure to use a scheduled task, not continuous backup. You do not want the system struggling to update the Synology while playing.
