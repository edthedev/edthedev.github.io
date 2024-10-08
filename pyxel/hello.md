---
layout: blog.njk
title: Hello Pyxel
tags: ['blog', 'pyxel']
date: 2024-05-13
---

## Hello World in Pyxel

This guide assumes steps in [/pyxel/setup/] have been completed.

1. Get some examples

    ```sh
    mkdir -p ~/src
    cd ~/src
    pyxel copy_examples
    ```


2. Run a program!

    ```sh
    cd ~/src/pyxel_examples
    pyxel run ./01_hello_pyxel.py 
    ```

3. Make a sprite!

    ```sh
    cd ~/src/pyxel_examples
    pyxel edit ./01_hello_pyxel.py 
    ```

    > Be sure to put it in the upper left corner, (0,0)

4. Edit a program

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

5. Run in again!

    ```sh
    pyxel run ./01_hello_pyxel.py 
    ```

6. Create a file for the website

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