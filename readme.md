## About

You have found the source code to the website Edward.Delaporte.us.
If you're just here for the content, head over to
 [Edward.Delaporte.us](https://edward.delaporte.us).

## Site Status

[![Eleventy Build](https://github.com/edthedev/edthedev.github.io/actions/workflows/eleventy.yml/badge.svg)](https://github.com/edthedev/edthedev.github.io/actions/workflows/eleventy.yml)

![badge](https://github.com/edthedev/edthedev.github.io/workflows/Pester%20Tests/badge.svg)
Many thanks to [MKletz](https://github.com/MKletz) for helping inform the GitHub actions pattern I use to PowerShell Pester test this site.

## Upgrading to Eleventy

Working locally:
> make --serve

On deploying:
https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/
https://snook.ca/archives/servers/deploying-11ty-to-gh-pages

## Running under Podman

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

4. Debug it!

```sh
podman run --rm -v .:/app -p 8080:8080 -it --entrypoint bash localhost/website
```

5. Audit and update packages.

```sh
podman run --rm -v .:/app -p 8080:8080 -it --entrypoint bash localhost/website
npm audit fix
```

