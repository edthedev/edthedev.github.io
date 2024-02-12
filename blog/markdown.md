---
layout: blog.njk
title: Markdown Tips by Edward Delaporte
tags: ['blog']
date: 2024-02-12
---

## Generating Documents

### Markdown to HTML

The usual VSCode plugins add a lot of weird junk (telemetry, perhaps), so I decided to start using brute force and minimal `GoLang` code to convert my Markdown into HTML.

#### Setup

```powershell
go install github.com/gomarkdown/mdtohtml@latest
mdtohtml -h
```

#### Generate document

```powershell
mdtohtml.exe -css https://edward.delaporte.us/css/edthedev.css .\Dashboard.md > Dashboard.html
```

VSCode Settings:
```json
"command-runner.terminal.name": "runCommand",
"command-runner.terminal.autoClear": true,
"command-runner.terminal.autoFocus": true,
"command-runner.commands": {
    "markdown to HTML": "mdtohtml.exe -css https://edward.delaporte.us/css/edthedev.css ${file} > ${file}.html",
	"HTML to PDF": "wkhtmltopdf.exe ${file}.html ${file}.pdf",
},
```

Then `Ctrl+Shift+P`, `Run Command` and select `markdown to HTML`.

### Markdown to PDF

#### Setup

Install [wkhtml2pdf.exe](https://wkhtmltopdf.org/) somewhere on my path. 

#### Use

```powershell
wkhtmltopdf.exe .\Dashboard.md.html dash.pdf
```

## Nicer Print-outs

### Prevent Code blocks from splitting in a PDF print

Usually when I have a block of text indented, I do not want that block to split across a print-out page break, when converting to PDF.

Conversion to PDF can happen when I do it on purpose, or when someone prints a webpage I built with Markdown.

For these cases, I like to inject this bit of inline HTML, directly into the Markdown document:

```html
<!-- Avoid page breaks within code blocks -->
<style> pre { page-break-inside: avoid; } </style>
```

Obviously, it is readable to anyone reading the Markdown source. But for every other view (Markdown preview, HTML and PDF) it is correctly hidden.
