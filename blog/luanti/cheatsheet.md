---
layout: blog.njk
title: My Luanti Cheat Sheet
tags: ['blog', 'rss']
date: 2025-12-22
---

## About

Here are some useful [Luanti](https://luanti.org) commands I often forget.

## Useful links

- [Server Commands](https://docs.luanti.org/for-players/server-commands/)

## Creative Mode

I mostly play in `Survival` or `Normal` mode, but sometimes I need to "get creative" to learn how to use a new mod.

To enter creative mode:

```sh
/grantme creative

```
To exit creative mode:

```sh
/revokeme creative
```

## Flight

I mostly play in survival, but I get tired of buidling scaffolding for my largest builds. Thankfully, free flight mode can be enabled separately.

```sh
/grantme fly
```

> Tip: If playing with flight mode enabled, I always also set `Double tap jump for fly` to easily enter and exit flight mode.

To set this `Double tap jump for fly`:

Open `Settings`, click `Controls` -> `General`, then check the box next to `Double tap jump for fly`.

## Clean Up

Sometime I need to clean up an orphaned block from a removed mod.

First, set the radius from the player to replace the target item with air. 20 blocks is usually reasonable:

```
/ru 20
```

Then run the `/ru` command to remove the target item.

```
/ru <full.item-name>
```

## Teleportation

`/teleport <player1> <player2>`

From [Teleportation](https://docs.luanti.org/for-players/server-commands/#teleportation)

## Reset a Password


`/setpassword <player> <password>`

From [Password Manipulation](https://docs.luanti.org/for-players/server-commands/#password-manipulation)

## Bypass world object protections

To allow destroying items owned by other players:

```
  /grantme protection_bypass
```

> Tip: Airplanes are fun, but they tend to crash into things. Young players sometimes do not know how to remove them.

From [Privilages](https://docs.luanti.org/for-players/privileges/)


## Server Administration

For some useful commands for maintaining a remote Luanti server, see my [Remote Server Invoke File](https://codeberg.org/EdTheDev/dotfiles/src/branch/main/invoke/luanti-remote/tasks.py)

