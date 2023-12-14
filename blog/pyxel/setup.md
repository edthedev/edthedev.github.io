---
layout: blog.njk
title: Pyxel
tags: ['blog', 'meta']
---

## Context

Let's play with [Pyxel](https://github.com/kitao/pyxel) a new retro game engine called `Pyxel`, built with `Python`.

## Setup

1. Install dependencies

    ```sh
    sudo apt install libsdl2-dev python3-pip -y
    ```

2. Install Pyxel

    ```sh
    sudo pip3 install -U pyxel
    ```

3. Get some examples

    ```sh
    mkdir -p ~/src
    cd ~/src
    pyxel copy_examples
    ```

## Play!

4. Run a program!

    ```sh
    cd ~/src/pyxel_examples
    pyxel run ./01_hello_pyxel.py 
    ```

5. Make a sprite!

    ```sh
    cd ~/src/pyxel_examples
    pyxel edit ./01_hello_pyxel.py 
    ```

    > Be sure to put it in the upper left corner, (0,0)

5. Edit a program

    ```sh
    cd ~/src/pyxel_examples
    codium .
    ```

    Let's replace the logo with what we just drew.

    ```python
    # pyxel.images[0].load(0, 0, "assets/pyxel_logo_38x16.png")
    pyxel.load("./01_hello_pyxel.py.pyxres")
    ```

    > Tip: Notice how this was loading a bitmap into 0,0
    > which we drew our new drawing into in the previous step.

6. Run in again!

    ```sh
    pyxel run ./01_hello_pyxel.py 
    ```

4. Create a file for the website

    ```sh
    $ mkdir hello
    $ mv ./01_hello_pyxel.py ./hello/         
    $ mv ./01_hello_pyxel.py.pyxres ./hello/         
    $ pyxel package hello ./hello/01_hello_pyxel.py
    added 'hello/.pyxapp_startup_script'
    added 'hello/01_hello_pyxel.py'
    pyxel app2html hello
    ```

    Now open `hello.html` in a browser....[Like this](/examples/pyxel/hello.html)

    > Tip: It will show the `Pyxel` logo for several moments while it loads.