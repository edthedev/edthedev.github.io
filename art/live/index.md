---
layout: liveart.njk
title: Pixel Art by Edward Delaporte
---

# Interactive Pixel Art

Every visitor experiences a unique new piece of pixel art.

I created these using the [P5.js library][1].

[1]: https://p5js.org/reference/

Try clicking the art. Some of them interact.

<!-- 
## Latest Sketch

[
![June 11 Sketch Preview](/img/art/latest.PNG)
](/art/live/latest)

[Latest Sketch in Progress](/art/live/latest)
-->

## Woodlands

[
![June 12 Sketch Preview](/img/art/trees_wide.PNG)
](/art/live/trees)

[Woodlands](/art/live/trees)

The most obvious change in this piece of pixel art is that the tree growth is now visibly animated. 

To achieve this, I created a trivial animation plan tracking algorithm. It stacks function calls into an array and plays them back slowly enough that the viewer can watch the algorithm work.

Behind the scenes, I also began re-working the existing shared code into small re-usable libraries.

This required an interesting change to the site generation template, which you can see [here](https://github.com/edthedev/edthedev.github.io/blob/1b31574972e0c08ca4591c911d2f8fa5a66de5cb/_includes/liveart.multi.script.njk#L25).


## May 20 Sketch - Snowy Day

[
![May 20 Sketch Preview](/img/art/snowday.PNG)
](/art/live/snowday)

The random effects are managed quite differently in this piece,
because the entire canvas has to be redrawn with every frame.

So there's extra work in the code preventing the window frame color 
from changing, and the sun from flickering across the sky.

It was pretty adorable when the snowman's arms were flailing randomly, I have to admit.

## May 11 Sketch - Candle

[
![May 11 Sketch Preview](/img/art/candle.PNG)
![May 11 Sketch Preview](/img/art/candle2.PNG)
![May 11 Sketch Preview](/img/art/candle3.PNG)
](/art/live/candle)

My recent meditation theme has been on slowing down.

+ The wood grain algorithm is a refinement on the grass algorithm in the tree sketch.
+ The dribbling wax just makes me smile.
+ The sky algorithm is subtly shifted to later evening, to justify the presence of the candle.

[May 11 Sketch - Candle](/art/live/candle)


## May 6 Sketch - Tree

<a href="/art/live/tree">

![May 8 Sketch Preview](/img/art/tree.PNG)
![May 8 Sketch Preview](/img/art/tree2.PNG)
![May 8 Sketch Preview](/img/art/tree5.PNG)
</a>

This was an interesting technical challenge to create random branching rules that feel natural.
+ Most of the effort on the background was to give the tree a space to feel more alive.

[May 8 Sketch - Tree](/art/live/tree)


## May 2 Sketch - Waves

<a href="/art/live/waves">

![May 2 Sketch Preview](/img/art/waves.PNG)
![May 2 Sketch Preview](/img/art/waves3.PNG)
![May 2 Sketch Preview](/img/art/waves2.PNG)
</a>

This is the first sketch where I felt confident enough to try a non-abstract subject.


[May 2 Sketch - Waves](/art/live/waves)

## April 2021 Sketches

The abstract pieces below are loosely based on actual sketches I have drawn.

The final live art has very little in common with the original sketches due to my limited mastery of JavaScript as an art medium. 

<a href="/art/live/deep">

![April 25 Sketch Preview](/img/art/deep.PNG)
</a>

[April 25 Sketch](/art/live/deep)

<a href="/art/live/sketch1">

![April 18 Sketch Preview](/img/art/sketch1.PNG)
![April 18 Sketch Preview](/img/art/sketch11.PNG)
</a>

[April 18 Sketch](/art/live/sketch1)

## Weave Patterns (December 2020)

<a href="/art/live/cross">

![Crossing Paths](/img/art/crossing.PNG)
</a>

[Crossing Paths](/art/live/cross)


<a href="/art/live/boxes">

![Balls in Boxes](/img/art/boxes.PNG)
</a>

[Balls in Boxes](/art/live/boxes)


<a href="/art/live/weave">

![Weave Art Screenshot](/img/art/weave2.PNG)
![Weave Art Screenshot](/img/art/weave3.PNG)
</a>

[Stark Weave Pattern](/art/live/weave)


<a href="/art/live/weave_strange">

![Strange Weave Screenshot](/img/art/weave_strange2.PNG)
![Strange Weave Screenshot](/img/art/weave_strange3.PNG)
</a>

[Strange Weave Pattern](/art/live/weave_strange)

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />The source code to this art is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. You may use and remix this code, as long as you give attribution to Edward Delaporte.

The artwork, itself, is Copyright of Edward Delaporte, 2021.