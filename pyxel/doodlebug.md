---
layout: blog.njk
title: Pyxel Lesson 01 - Doodle Bug
tags: ['blog', 'pyxel']
date: 2023-12-13
---

## About Doodle Bug

Doodle Bug is an example program to learn Pyxel.

![an animation of doodle bug](/img/pyxel/doodlebug.gif)

Doodle bug is based on [Scribble Bug](https://github.com/edthedev/scratch_lessons/blob/master/ScribbleBug.md), which you can create in [MIT Scratch](https://scratch.mit.edu/projects/editor/).

After you [Install Pyxel](https://github.com/kitao/pyxel#how-to-install), you can follow the steps below to create the Doodle bug program.

## Step 1: Draw a Bug

Start up the `Pyxel` editor:

```sh
pyxel edit doodlebug.pyxres
```

Now draw a bug in the left window.

![drawing a bug in Pyxel](/img/pyxel/draw_bug.gif)

> Tip: The right window should show a smaller version of your bug drawing, and it should be in the very upper-left corner.

Be sure to press `Ctrl+S` to save, before pressing `ESC` to exit.

You should now have a file called `doodlebug.pyxres`.

## Step 2: Copy in the Code

Open a text editor, and copy the following code into it. Save it as `doodlebug.py`:

```python
{{ 'examples/pyxel/doodlebug/doodlebug.py' | displayJS  }}
```

## Step 3: Play Scribble Bug!

```sh
pxyel run doodlebug.py
```

You can also [click here to try Doodlebug](/examples/pyxel/doodlebug.html).

## Step 4: Remix!

Open `doodlebug.py` in your text editor, and change some numbers, save the file, and run the program again so see what changed.

```sh
pxyel run doodlebug.py
```