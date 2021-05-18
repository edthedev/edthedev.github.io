---
layout: basic.njk
title: BASIC Programs by Edward Delaporte
---

Here's a BASIC program that lists the special printable characters available.

```basic
10 COUNT = 50
20 LOW = 185
2010 FOR CH = LO TO COUNT+LO
2012 LET Y = 5
2015 LET RE = CH - (INT(CH/Y)*Y)
2016 IF RE=0 THEN PRINT ""
2020 PRINT CH;
2030 PRINT CHR$(CH);
2040 NEXT CH
9000 PRINT ""
9010 PRINT "GOODBYE"
```

![BASIC program - list characters](/img/basic/list_characters.gif)