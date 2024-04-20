---
layout: blog.njk
title: Play MineTest locally with Ubuntu
tags: ['blog', 'rss']
date: 2024-03-01
---

## About

`MineTest` doesn't natively require Internet access, after initial setup of game files, game engines and mod-packs.

So it struck me that I ought to be able to achieve networked play between my Ubuntu laptop and a couple of Android phones, anywhere I want, without a trusted Internet connection.

## Host from Ubuntu without a local network

On your hosting Ubuntu PC, **while on regular Internet**, install `MineTest` and (from within MineTest) ensure you have the game you want to play downloaded, such as `MineGame`.

In `Gnome` settings, select `Wi-Fi`.
In the `...` toward the upper-right, choose `Turn On Wi-Fi Hotspot...`.
Choose some options reasonable for your situation.

*From the command line*, run `hostname -I`, to learn your new IP address.

- Start `MineTest`.
- Be sure `Host Server` is enabled.
- Host a game from the `Start Game` tab. 

## Connect from a client device

On your client device - PC, Phone or SteamDeck:

**While on regular Internet**, install `MineTest` and ensure you have the game you want to play downloaded, such as `MineGame`.

Now **connect to the Wi-Fi hotspot** you just created.

- Launch `MineTest`.
- Choose your game (usually `MineGame`).
- Select the `Join Game` tab.
- Ignore the (likely empty, since you're on a hotspot) list of servers in the left panel.
- In the right panel, enter the IP address returned by `hostname -I` earlier.
- Leave the default port, unless you changed it on the hosting PC.
- If this is your first time connecting to your new server, create a Name and Password and press `Register`.
- If you have played before, enter your Name and Password and press `Login`.

Enjoy!

