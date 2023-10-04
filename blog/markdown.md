---
layout: blog.njk
title: Markdown Tips by Edward Delaporte
---

## Prevent Code blocks from splitting in a PDF print

Usually when I have a block of text indented, I do not want that block to split across a print-out page break, when converting to PDF.

Conversion to PDF can happen when I do it on purpose, or when someone prints a webpage I built with Markdown.

For these cases, I like to inject this bit of inline HTML, directly into the Markdown document:

```html
<!-- Avoid page breaks within code blocks -->
<style> pre { page-break-inside: avoid; } </style>
```

Obviously, it is readable to anyone reading the Markdown source. But for every other view (Markdown preview, HTML and PDF) it is correctly hidden.
