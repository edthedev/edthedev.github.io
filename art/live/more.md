---
layout: gallery.njk
title: More Pixel Art by Edward Delaporte
pagination:
    data: items
    size: 20
items: 
    - {id: "basic", name: "BASIC - 2021 Dec 24", 
    desc: "Typesetting art often ignores the classics."}
    - {id: "laserspace", name: "Laserspace - 2021 Aug 5", desc: "Still running with the 80s carpet theme."}
    - {id: "80s_carpet", name: "80s Carpet - 2021 July 29"}
    - {id: "sliders", name: "Sliders - 2021 July 28"}
    - {id: "weave_square", name: "Square Weave - 2021 June 29", desc: "A less complex path algorithm, simpler background and squares within squares brings this close to where I first envisioned it."}
    - {id: "80s_weave", name: "80s Weave - 2021 June 28", desc: "Using various angles other than 90 degres for the line paths was interesting - but it proved too busy for re-use in later sketches. Notice that the next sketch sticks to 90 degree angles."}
    - {id: "dots_and_boxes", name: "Dots and Boxes - 2021 June 18", desc: "This quick tribute to 80s Pop Art is also a demonstration that I am getting a bit more comfortable controling the animation sequence. Most notably, for this piece I start and stop the animation exactly when I want to."}
    - {id: "snowday", name: "Snow Day - 2021 May 20", desc: "The random effects are managed quite differently in this piece, because the entire canvas has to be redrawn with every frame. There's extra work in the code preventing the window frame color from changing, and the sun from flickering across the sky. It was pretty adorable when the snowman's arms were flailing randomly, I have to admit."}
    - {id: "tree", name: "Tree - 2021 May 6", desc: "This was an interesting technical challenge to create random branching rules that feel natural. Most of the effort on the background was to give the tree a space to feel more alive."}
    - {id: "deep", name: "Deep Dive - 2021 April 25"}
    - {id: "crossing", name: "Crossing Paths - 2020 December"}
    - {id: "boxes", name: "Bouncing in Boxes - 2020 December"}
    - {id: "weave_strange", name: "Strange Weave - 2020 December"}

---

# More Interactive Pixel Art

You have stumbled upon the [back room][111]. This is where I keep the art pieces reseved for the eyeballs of the truest appreciators. Enjoy.

[111]: https://www.penny-arcade.com/comic/2009/11/27/retales-part-two

The art pieces that I like better are [in the front window](/art/live).

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


## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />The source code to this art is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. You may use and remix this code, as long as you give attribution to Edward Delaporte.

The artwork, itself, is Copyright of Edward Delaporte, 2021.
