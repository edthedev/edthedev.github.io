---
layout: basic.njk
title: True Love and Binary - BASIC Program by Edward Delaporte
---

## True Love and Binary

I found myself thinking of my favorite person quite a bit while getting back into `BASIC` coding - and so this program is heart themed.

Rather than just `PRINT`-ing a bunch of `CHR$(211)` together, I set `MA` to a number that represents the desired pattern or hearts (1's) and blanks (0's) in binary. Then I `GOSUB` to a sub-routine that left shifts then gets the remainder of division by 2 (see line `2090`) and then prints the correct value based on the remainder (`RE`).

```basic
{% include 'basic/hearts.bas' %}
```

![BASIC program](/img/basic/hearts.gif)



