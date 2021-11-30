---
layout: basic.njk
title: Cycle Background Color - BASIC Program by Edward Delaporte
---

## Cycle Background Color

This is where we start to get into differences between the C64 and X16 Commander. This example code works on the X16 Commander, but you may need to use `POKE 53281,BK` if you are using an actual C64.

> WARNING: Strobe effect. I take my time in the animation below, but if you hit enter quickly, your program will effectively be a stobing series of lights.

```basic
{% include basic/bg_cycle.bas %}
```

![BASIC program animation](/img/basic/bg_cycle.gif)


