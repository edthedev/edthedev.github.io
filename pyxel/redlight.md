---
layout: blog.njk
title: Pyxel Lesson 01 - Red Light, Green Light
tags: ['pyxel']
date: 2023-12-14
---

## About Red Light, Green Light

`Red Light, Green Light` is an example program to learn [Python](https://docs.python.org/3/), using [Pyxel](https://github.com/kitao/pyxel).

I first wrote `Red Light, Green Light` in [MIT Scratch][MIT] to support teaching programming to kids at my local library. It's mean to be fun while using as few commands as possible.

[MIT]: https://scratch.mit.edu/projects/editor/

![an animation of red light green light](/img/pyxel/redlight.gif)

After you [Install Pyxel](https://github.com/kitao/pyxel#how-to-install), you can follow the steps below to create the program.

## Step 1: Draw a runner

Start up the `Pyxel` editor:

```sh
pyxel edit redlight
```

Now draw a runner in left window.

![drawing a bug in Pyxel](/img/pyxel/draw_bug.gif)

> Tip: The right window should show a smaller version of your bug drawing, and it should be in the very upper-left corner.

Be sure to press `Ctrl+S` to save, before pressing `ESC` to exit.

You should now have a file called `redlight.pyxres`.

## Step 2: Draw a place to run

Start up the `Pyxel` editor:

```sh
pyxel edit redlight.pyxres
```

Click the second icon in the upper-left to switch to the 'Tile Map' window.

![switching to the tile map in Pyxel](/img/pyxel/tilemap.gif)

## Step 3: Copy in the Code

Open a text editor, and copy the following code into it. Save it as `redlight.py`:

```python
{{ 'examples/pyxel/redlight/redlight.py' | displayJS  }}
```

## Step 3: Play Red Light, Green Light

```sh
pxyel run redlight.py
```

You can also [click here to try redlight](/examples/pyxel/redlight.html).

## Step 4: Remix!

Open `redlight.py` in your text editor, and change some numbers, save the file, and run the program again so see what changed.

```sh
pxyel run redlight.py
```
