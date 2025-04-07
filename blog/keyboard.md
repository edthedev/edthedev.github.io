---
layout: blog.njk
title: Building a Keyboard
tags: []
date: 2024-12-26
---

## About

I built a keyboard from a bad of parts. Hooray.

## Why

Because I can...probably.

## Lessons Learned

- [Corne V3][1] seemed widely available and a reasonable place to start.
- YouTube tutorials on Soldering were quite helpful.
- A reverse action tweezers is quite helpful for the tiny bits.
- The whole thing could have cost as little as $100.00 in parts. I already had a simple soldering iron, and safety equipment.
- But I learned that 'LP' means 'low profile'. The LP PCB I bought is only compatible with LP switches. The standard Corne case I bought is not compatible with the LP switches that I bought to go with the LP PCB I bought. Cherry keycaps actually work, but sort of defeat the purpose of 'low profile'.
- QMK is a Python package. It (probably) works fine on Linux.

[1]: https://github.com/foostan/crkbd/tree/main
```bash
python3 -m venv keyboard
source keyboard/bin/activate
python3 -m pip install qmk
qmk setup
```

Say 'yes' to some prompts to install firmware, and dependencies.
Give it `sudo` permission for the dependencies.

Then maybe this?
```sh
qmk compile -kb crkbd/rev1 -km default
qmk flash -kb crkbd/rev1 -km default
```



Follow up:

- How to do a knob?! Possible with Corne?

