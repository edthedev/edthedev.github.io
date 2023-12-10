---
layout: blog.njk
title: On EleventyJS
---

## Context

This blog is built with the [Eleventy.js][11ty] framework.

## Markdown

Most of my website is just [Markdown][md] that I've typed into a text editor and uploaded to `GitHub`.

[md]: https://daringfireball.net/projects/markdown/syntax
[11ty]: https://www.11ty.dev/

That's not the interesting bit, so I won't get into much detail here.

Instead, let's talk about the bits that *aren't* `Markdown`.
It's important to me that almost everything I work on is as simple as possible. So for the less simple bits, perhaps I had an interesting reason.

## What Else Is There?

### Plain Text

Let's start with an easy one. There's no `Markdown` specification for a [SECURITY.TXT file][sec].

[sec]: https://answers.uillinois.edu/illinois/page.php?id=118277

So instead, I carve off that bit of the repository, and just serve the raw path and text of `/.well-known/security.txt`.

I let `Eleventy` know that's what needs to happen by a line in `.eleventy.js`:

```javascript
  eleventyConfig.addPassthroughCopy(".well-known");  // security.txt
```
### Clever Bits in JavaScript (plugins)

There's some bits of the site that I don't want to type over and over again. Most notably - the site navigation and RSS feeds. Thankfully, `Eleventy` has plugins for that:

```javascript
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
```

## More

- [Plugins](/blog/eleventy/plugins)
- [Dockerfile](/blog/eleventy/dockerfile)