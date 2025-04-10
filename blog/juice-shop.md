---
layout: blog.njk
title: Learn Cybersecurity with OWASP Juice Shop
tags: ['blog', 'rss', 'learning']
date: 2025-04-10
---

The OWASP Juice Shop is currently my favorite Cybersecurity learning tool. It's an intentionally vulnerable website that acts like a puzzle box - you use common vulnerabilities to break into it, and the more you learn the more layers become available to break into. It has some built in tutorials, and more hints can be found across variuos blogs. Also feel free to reach out to me - I'm working though it right now myself to improve my own skills.

As of this blog's publish date, there's a version vailable at https://demo.owasp-juice.shop/#/. While exploring this version with standard manual approaches is fine, it is still rude to use heavy tool-based approaches against a site you are not hosting.

## Juice Shop in a Container

For advanced usage, I recommend running a local copy of Juice Shop using `Podman` or `Docker`. I prefer `Podman`, so my examples below will use it.

> Tip: Anywhere the command `podman` appears below, `docker` will work as well.

First, run this once to install the files for Juice Shop:

```sh
podman pull bkimminich/juice-shop
```

Then, each time you want to run the Juice Shop, run:

```sh
podman run -d -p 3000:3000 bkimminich/juice-shop
```

Then visit `localhost:3000` in your browser.

All progress in Juice Shop is saved in your local cookies, so your progress will be maintained between sessions, until you clear your cookies.

## Juice Shop Hints

My favorite hint about OWASP Juice Shop is that all ethical hackers should look for the files `/.well-known/security.txt`. A file with this name is often placed on web servers to tell ethical hackers what is allowed and where to report problems. In the case of OWASP Juice Shop, it also contains the URL of a scoreboard that gives hints and keeps track of your achievements.

Another wise place to check on any server is `robots.txt`, which describes acceptable ways to interact with the server. In the case of Juice-Shop, it tells scripts not to index a pretty intersting looking directory, which is needed to solve some of the puzzles.