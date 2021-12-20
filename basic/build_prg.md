---
layout: basic.njk
title: Build and run a PRG file - Guide by Edward Delaporte
---

# Build and Run a PRG File


To practice, I decide to attempt building the [X16 Commander Sprite demo][1].


[1]: https://github.com/commanderx16/x16-demo/tree/master/cc65-sprite

If you are following along, be sure to start with [setting up the X16 Emulator on Raspberry Pi](/basic/x16pi/)

## Dependencies

I love that we're working with Python data conversion tools called from Makefiles.

This must be how Superman felt the first time he stepped foot in the Bottle City of Kandor.
I have never set foot here before, but I am at home.

Here's what we need to install.

```sh
apt install make python3-pip python3-numpy
pip3 install pillow # Python Image Library
```

> Be sure to install `numpy` via apt to resolve the C dependencies on Raspberry Pi.

## Build the PRG file.

```sh

git clone https://github.com/commanderx16/x16-demo.git
cde x16-demo/cc65-sprite
make balloon.inc
make 
```

The commands that get run by the Makefile are:

```
python3 ../tools/png2sprite.py -n balloon $< $@
cl65 -t cx16 -O -o demo.prg demo.c
```

So the interesting files are:
- balloon.png - A modern image!
- balloon.inc - A C include file with the converted image.
- demo.c - The program
- demo.prg - The machine readable file for X16 Commander, if all went to plan.

## Run the program

Now let's give it a try!

```sh
x16emu -prg ./demo.prg -run
```

![cc65 PRG demo in X16 Commander](/img/basic/cc65spritedemo.gif)