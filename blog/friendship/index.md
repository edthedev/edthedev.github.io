---
layout: blog.njk
title: Friendship Is Magic - Edward.Delaporte.us
tags: ['blog']
---

## Overview

I am [fluent in an absurd number of programming languages](/me/code).
I love programming languages - even terrible ones like [Pikachu](/pikachu).

But no language has tempted me as much as [Friendship is Magic++](https://github.com/avian2/fimpp).

## Setup

Fimp++ is great fun, but I'm not going to corrupt an operating system's packages with it permanently.
So this is a job for `podman`.
Instructions that follow will be for Centos9, because I happen to be playing with `OpenShift` right now.

1. Install Podman

	```sh
	sudo yum install epel-release -y
	sudo yum install podman -y
	```

2. Pull the `Friendship is Magic` Docker image

	`podman pull avian2/fimpp`

3. Create a program.

```
{% include 'examples/fimpp/fizzbuzz.fimpp' %}
```

6. Poke around inside the container to realize that I have SELinux `helping` me.


	```sh
	podman run -v `pwd`:/letters --entrypoint=bash -it avian2/fimpp
	```

7. Run the program with `fimpp` inside the `podman` container


	```sh
	podman run -v `pwd`:/letters:z avian2/fimpp /letters/fizzbuzz.fimp
	```
