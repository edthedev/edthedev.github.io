---
layout: blog.njk
title: Setup Pyxel On Ubuntu
tags: ['blog', 'pyxel']
date: 2023-12-10
---

## Context

Let's play with [Pyxel](https://github.com/kitao/pyxel) a new retro game engine called `Pyxel`, built with `Python`.

> Warning: If you're using a Windows or Mac computer, use the [Pyxel Install Instructions](https://github.com/kitao/pyxel#how-to-install), instead.

## Setup

1. Install dependencies

    ```sh
    sudo apt install libsdl2-dev python3-pip pipx -y
    ```

2. Install Pyxel

    ```sh
    pipx install pyxel
    pipx ensurepath
    ```

> Tip: Verify this worked with `which pyxel`

3. Install `codium`

    Pyxel does not come with an editor.
    To follow [/pyxel/hello/] exactly, you'll want to install `codium`. Otherwise, just replace `codium` in any example with your preferred text editor.

    ```sh
    sudo apt install codium
    which codium
    ```