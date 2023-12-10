---
layout: blog.njk
title: On Slide Decks with JavaScript
tags: ['blog', 'meta']
---

## Context

As I have mentioned before, I strive to ensure that everything I work with is plain text.

![Padme is shocked that Anakin builds slide decks with plain text](/img/plain_text_slides.jpg)

I use the delightful [remark Javascript library][remark] to convert `Markdown` into [lovely slide decks](/slides).

[remark]: https://github.com/gnab/remark

Under the hood, most of my slide decks look like this:

```html
{% raw %}
<textarea id="source">

# Slide Title

## Slide Subtitle

- My keen and valuable insights
- As bulleted lists
- This is the way

???

My speaker notes.

---

# Another Slide Title

</textarea>
<!--<script src="https://gnab.github.io/remark/downloads/remark-latest.min.js">-->
<script src="/js/remark-latest.min.js" />
<script>
    var slideshow = remark.create();
</script>

{% endraw %}
```

> Tip: Because the sides spend part of their life as `HTML`, I am able to style however I want using my mad `CSS` skills.

Because I'm doing an extra bit of `JavaScript`, I must exempt the `/slides` folder from being processed by `Eleventy.js` in `.eleventy.js`:

```javascript
  eleventyConfig.addPassthroughCopy("slides");  // My slide decks
```