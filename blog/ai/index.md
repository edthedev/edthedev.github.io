---
layout: blog.njk
title: 'Artificial Intelligence?'
tags: []
date: 2026-02-23
---

## About

I have gathered some of my experiences here on what we currently call "Artificial Intelligence", usually Language Learning Models (LLMs).

I want to start with an acknowledgement:

> Many of these models were built without permission or even acknowledgement of the humans whose work was used.
> I limit my own use of these models to ways that I do not believe cause any further harm to the creatives we all count on.

## Interesting Use - Image Recognition

I have been saving video game screenshots for many years, hoping to someday humorously use them to respond in chat messages.

After all, why just reply "I'm not sure" when I could send an in-game screenshot of Squall from Final Fantasy VIII, saying the same.

This leads to a few challenges:

- A way to search the screenshots, based on the text inside each image.
- Accessible alternative text for each screenshot.
- A quick script to pull all of it together, while saving any manual alternatvie text corrections.
- Maybe a light-weight web interface so that I can access the whole solution over HTTPS on my local network, from my phone or my work laptop.

For the first part, I used Python and `ollama`, running on a local model on my desktop:

[Simple Python OCR Script](https://codeberg.org/EdTheDev/dotfiles/src/branch/main/files/ocr)


