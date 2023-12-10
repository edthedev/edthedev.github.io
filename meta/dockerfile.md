---
layout: blog.njk
title: A Dockerfile for EleventyJS
tags: ['blog', 'meta']
---

## Context

I like to use 'Long Term Support (LTS)' releases.
These never include new enough versions of `NodeJS` 
to build my website.
`podman` to the rescue.

## Here is a quick Dockerfile

```docker
{% include 'examples/dockerfile.example' %}
```

## And here are some commands 

1. Build the image

```sh
podman build -t website .
```

2. Got an image built?

```sh
$ podman image list        
REPOSITORY                     TAG         IMAGE ID      CREATED         SIZE
localhost/website              latest      65b259905584  25 seconds ago  1.19 GB
```

3. Run it!

```sh
podman run --rm -v .:/app -p 8080:8080 localhost/website
```

4. Maybe dig around inside to debug it!

```sh
podman run --rm -v .:/app -p 8080:8080 -it --entrypoint bash localhost/website
```

5. Audit and update packages.

```sh
podman run --rm -v .:/app -p 8080:8080 -it --entrypoint bash localhost/website
npm audit fix
```