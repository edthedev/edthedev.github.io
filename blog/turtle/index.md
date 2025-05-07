---
layout: blog.njk
title: Robot Turtle with Python
tags: ['blog', 'rss']
date: 2025-05-05
---

## Robot Turtles

[Turtle Graphics programs](https://en.wikipedia.org/wiki/Turtle_graphics) are a cool part of computing history, and a useful way to teach programming.

One of the simpler ways to try out Turtle programming, today, is through the [Python Turtle Module](https://docs.python.org/3/library/turtle.html).

## Getting Ready

> Tip: Be sure that Python is installed with the [Tkinter module](https://docs.python.org/3/library/tkinter.html) option enabled. This is usually a checkbox during install on Windows. On Linux and Mac it may be a specially named package, such as `python3-tk`.

```sh
sudo apt install python3-tk
```

## Launching the Turtle Program

Type the command `python` into a terminal. Then, in the interactive Python session, type:

```python
from turtle import *
```

Now, to list the available commands, type:

```python
dir()
```

To learn more about a particular command, type use the `help` function:
 
```python
help(forward)
```

> Tip: Press `Q` to exit the help viewer and return to Python.

To display the Turtle window, type your first command:

```python
forward(100)
```

> Tip: A new separate window should appear with an arrow pointing to the right. The tip of the arrow is your turle. The line coming out of the arrow is the 100 points of travel the turtle just completed.

Some interesting commands to explore:

- `penup()` - lift the pen to allow moving without drawing
- `pendown()` - lower the pen to resume drawing
- `right(45) / left(90)` rotate left or right the number of degrees specified
- `xcor() / ycor()` - show the current x or y coordinate
- `heading()` - get the current heading (in degrees)
- `goto(0,0)` - go directly to the x and y cordinates given
- `color('green') - change the turtle (and ink) to the given color
- `write('hello world') - write the given text next to the turtle
- `setx(100) / sety(100)` - jump to the given x / y coordiante
- `stamp()` - "stamp" the turtle's current appearance into the canvas
- `clearscreen()` - empty the canvas of all drawings
- `pensize(10)` - change the pen line thickness to the given number of pixels
- `hideturtle()` - hide the turtle
- `showturtle()` - show the turtle
- `undo()` - undo the previous command

> Tip: All commands whould end in `()` - and some take arguments - text between the `()`.

