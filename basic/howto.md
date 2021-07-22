---
layout: basic.njk
title: BASIC Programs by Edward Delaporte
---

## Example Program - Waves

This program is older than I am, but makes a great test of whether my website is ready to share the code inline.

```basic
{% include basic/waves.bas %}
```

## How to make a GIF file!

If you have clone my website, 
then you can generate this GIF with the following commands.


```powershell
New-Item -Type Directory c:\src
cd c:\src
git clone https://github.com/edthedev/edthedev.github.io.git
cd c:\src\edthedev.github.io.git
x16emu.exe -bas _includes\basic\waves.bas -gif img\basic\waves.gif
```

Now type RUN, and hit Return/Enter.
When ready, exit X16emu.exe with the X in the corner.

## Results

![Animation of the BASIC code above. Looks like waves or a maze.](/img/basic/waves.gif)