---
layout: slides.njk
title: Caffeiene Break Presentation - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

# Secret Detection with pre-commit

Enhancing the Cybersecurity Program 
to make University Software Development Safer

Presented by Edward Delaporte, March 2022

???

We call the team "SecDev" for short.

Overview:
+ What we strive to deliver.
+ Co-presenting with Jon and Alex, so targeting 5 to 10 minutes for my part.

---

## Recipe

In repository root, add:
`.pre-commit-config.yaml`:

```yaml
repos:
-   repo: https://github.com/Yelp/detect-secrets
    rev: v1.2.0 # Pinned on 2022.03 after 1.1.0 fixes.
    hooks:
    -   id: detect-secrets
        args: ['--baseline', '.secrets.baseline']
```

???

- pre-commit can clone and setup certain repositories like this one.
- hooks section describes the commands to run.
- revision must always be a tag.

---

## Per-Developer Setup

[Install pre-commit](https://pre-commit.com/#install) then run this command
 from the repository root:

`$ pre-commit install`

</pre>