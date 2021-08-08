---
layout: gallery.njk
title: Pixel Art by Edward Delaporte
pagination:
    data: items
    size: 20
items: 
    # - {id: "latest", name: "Another Sketch - In Progress"}
    - {id: "glide", name: "Glide - 2021 Aug 7"}
    - {id: "laserspace", name: "Laserspace - 2021 Aug 5"}
    - {id: "80s_carpet", name: "80s Carpet - 2021 July 29"}
    - {id: "sliders", name: "Sliders - 2021 July 28"}
    - {id: "weave_square", name: "Square Weave - 2021 June 29", desc: "A less complex path algorithm, simpler background and squares within squares brings this close to where I first envisioned it."}
    - {id: "80s_weave", name: "80s Weave - 2021 June 28", desc: "Using various angles other than 90 degres for the line paths was interesting - but it proved too busy for re-use in later sketches. Notice that the next sketch sticks to 90 degree angles."}
    - {id: "dots_and_boxes", name: "Dots and Boxes - 2021 June 18", desc: "This quick tribute to 80s Pop Art is also a demonstration that I am getting a bit more comfortable controling the animation sequence. Most notably, for this piece I start and stop the animation exactly when I want to."}
    - {id: "woodlands", name: "Woodlands - 2021 June 12", desc: "The most obvious change in this piece of pixel art is that the tree growth is now visibly animated. 

To achieve this, I created a trivial animation plan tracking algorithm. It stacks function calls into an array and plays them back slowly enough that the viewer can watch the algorithm work.

Behind the scenes, I also began re-working the existing shared code into small re-usable libraries.

This required an interesting change to the site generation template, which you can see [here](https://github.com/edthedev/edthedev.github.io/blob/1b31574972e0c08ca4591c911d2f8fa5a66de5cb/_includes/liveart.multi.script.njk#L25)."}
    - {id: "snowday", name: "Snow Day - 2021 May 20", desc: "The random effects are managed quite differently in this piece, because the entire canvas has to be redrawn with every frame. There's extra work in the code preventing the window frame color from changing, and the sun from flickering across the sky. It was pretty adorable when the snowman's arms were flailing randomly, I have to admit."}
    - {id: "candle", name: "Candle - 2021 May 11", desc: "
My recent meditation theme has been about slowing down.

+ The wood grain algorithm is a refinement on the grass algorithm in the tree sketch.

+ The dribbling wax just makes me smile.

+ The sky algorithm is subtly shifted to later evening, to justify the presence of the candle.

"}
    - {id: "tree", name: "Tree - 2021 May 6", desc: "This was an interesting technical challenge to create random branching rules that feel natural. Most of the effort on the background was to give the tree a space to feel more alive."}
    - {id: "waves", name: "Waves - 2021 May 2", desc: "This is the first sketch where I felt confident enough to try a non-abstract subject."}
---

# Interactive Pixel Art

Every visitor experiences a unique new piece of pixel art.

I created these using the [P5.js library][1].

[1]: https://p5js.org/reference/

Try clicking the art. Some of them interact.

<!-- Loop through art works. -->
{%- for item in pagination.items %}
## {{ item.name }}

[
![{{item.name}}](/img/art/{{item.id}}.PNG)
](/art/live/{{item.id}}/)
[
![{{item.name}}](/img/art/{{item.id}}2.PNG)
](/art/live/{{item.id}}/)

[{{item.name}}](/art/live/{{item.id}}/)

{{item.desc}}

{% else %}

Nothing to see here.

{% endfor -%}

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

## December 2020 Sketches

### Crossing Paths 

<a href="/art/live/cross">

![Crossing Paths](/img/art/crossing.PNG)
</a>

[Crossing Paths](/art/live/cross)

### Bouncing in Boxes

<a href="/art/live/boxes">

![Bouncing in Boxes](/img/art/boxes.PNG)
</a>

[Bouncing in Boxes](/art/live/boxes)

### Weave

<a href="/art/live/weave">

![Weave Art Screenshot](/img/art/weave2.PNG)
![Weave Art Screenshot](/img/art/weave3.PNG)
</a>

[Stark Weave Pattern](/art/live/weave)

### Strange Weave

<a href="/art/live/weave_strange">

![Strange Weave Screenshot](/img/art/weave_strange2.PNG)
![Strange Weave Screenshot](/img/art/weave_strange3.PNG)
</a>

[Strange Weave Pattern](/art/live/weave_strange)



## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />The source code to this art is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. You may use and remix this code, as long as you give attribution to Edward Delaporte.

The artwork, itself, is Copyright of Edward Delaporte, 2021.