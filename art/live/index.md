---
layout: gallery.njk
title: Pixel Art by Edward Delaporte
pagination:
    data: items
    size: 20
items: 
    # - {id: "latest", name: "Another Sketch - In Progress"}
    - {id: "fractal_trees", name: "Fractal Trees at Sunset - 2023 September 23", 
    desc: "Trees again. This time with mostly unrandomized fractals."}
    - {id: "fractal_sunset", name: "A Fractal at Sunset - 2023 September 22", 
    desc: "Mixing some techniques."}
    - {id: "fractal1", name: "First Fractal  - 2023 September 22", 
    desc: "How hard can it be to write a fractal in JavaScript?"}
    - {id: "fruit_trees", name: "Fruit Trees - 2023 September 3", 
    desc: "I continue to find an interesting challenge in drawing trees."}
    - {id: "tile", name: "Tile - 2021 Aug 27", 
    desc: "Time to start tiling."}
    - {id: "glide", name: "Glide - 2021 Aug 7", 
    desc: "I might be satisfied with how this algorithm behaves now."}
    - {id: "weave_square", name: "Square Weave - 2021 June 29", desc: "A less complex path algorithm, simpler background and squares within squares brings this close to where I first envisioned it."}
    - {id: "dots_and_boxes", name: "Dots and Boxes - 2021 June 18", desc: "This quick tribute to 80s Pop Art is also a demonstration that I am getting a bit more comfortable controling the animation sequence. Most notably, for this piece I start and stop the animation exactly when I want to."}
    - {id: "woodlands", name: "Woodlands - 2021 June 12", desc: "The most obvious change in this piece of pixel art is that the tree growth is now visibly animated. 

To achieve this, I created a trivial animation plan tracking algorithm. It stacks function calls into an array and plays them back slowly enough that the viewer can watch the algorithm work.

Behind the scenes, I also began re-working the existing shared code into small re-usable libraries.

This required an interesting change to the site generation template, which you can see [here](https://github.com/edthedev/edthedev.github.io/blob/1b31574972e0c08ca4591c911d2f8fa5a66de5cb/_includes/liveart.multi.script.njk#L25)."}
    - {id: "candle", name: "Candle - 2021 May 11", desc: "
My recent meditation theme has been about slowing down.

+ The wood grain algorithm is a refinement on the grass algorithm in the tree sketch.

+ The dribbling wax just makes me smile.

+ The sky algorithm is subtly shifted to later evening, to justify the presence of the candle.

"}
    - {id: "tree", name: "Tree - 2021 May 6", desc: "This was an interesting technical challenge to create random branching rules that feel natural. Most of the effort on the background was to give the tree a space to feel more alive."}
    - {id: "waves", name: "Waves - 2021 May 2", desc: "This is the first sketch where I felt confident enough to try a non-abstract subject."}
    - {id: "sketch1", name: "Sketch - 2021 April 18", desc: "

These abstract pieces are loosely based on actual sketches I have drawn.

The final live art has very little in common with the original sketches due to my limited mastery of JavaScript as an art medium. "}
    - {id: "crossing", name: "Crossing Paths - 2020 December"}
    - {id: "weave", name: "Stark Weave - 2020 December"}

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

## More Art

There's more live interactive art [over here](/art/live/more)

## Older JavaScript Art

Before I started using P5.js, I generated these images using [Aza Raskin's](http://www.azarask.in/blog/) JavaScript art tool [Algorithm Ink](http://azarask.in/projects/algorithm-ink).

 ![Art](/img/gallery/1330185980701.jpg "Art")
 ![Art](/img/gallery/1330185531212.jpg "Art")
 ![Art](/img/gallery/1330092232228.jpg "Art")


## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />The source code to this art is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. You may use and remix this code, as long as you give attribution to Edward Delaporte.

The artwork, itself, is Copyright of Edward Delaporte, 2021.
