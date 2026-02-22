---
layout: blog.njk
title: Upgrading Debian on my Surface Go
tags: ['blog']
date: 2026-02-21
---

Per my [earlier blog post](/blog/surfacego), my Surface Go has now been running Linux for three years. I initially chose Ubuntu, and had a great experience.

But based on the output of `cat /etc/*-release`, I upgraded to Debian at some point.

I do not recall Ubuntu failing in any way, but I no longer trust the `snap` ecosystem. I imagine that was my motivation.

My cheif complaint about Debian is that it works so well I tend to forget when I have not upgraded in a few thousand years.

This upgrade is different. This upgrade is special. For this upgrade, I am a bit obsessed with the Python `invoke` utility.

If you share my over-appreciation for `invoke`, you may find [my invoke file for a Debian upgrade](https://codeberg.org/EdTheDev/dotfiles/src/branch/main/invoke/upgrade-linux/tasks.py) useful.

You can grab the latest from my dotfiles at CodeBerg, but here's a snapshot if you don't feel like clicking through:

```python
from invoke import task

from datetime import datetime as dt
import os

HOME = os.path.expanduser('~')
TODAY = dt.now().strftime('%Y.%m.%d')
DOTFILES=f'{HOME}/dotfiles'


@task
def backup_package_list(c):
    c.run(f'dpkg --get-selections > {HOME}/backup/packages.{TODAY}.dpkg')


@task
def show_disk_space(c):
    print("Do we have at least 5G of free space?")
    c.run('df -h /')


@task
def backup_sources(c):


@task
def backup_etc(c):
    print("Use --prompt-for-sudo")
    c.run(f'sudo tar -czf {HOME}/backup/etc.backup.{TODAY}.tar.gz /etc')
    login = os.getlogin()
    c.run(f'sudo chown {login}:{login} {HOME}/backup/etc.backup.{TODAY}.tar.gz')


@task
def checklist(c):
    print("- [ ] Review the output of `invoke review-backups`")
    print("- [ ] Verify that {HOME}/backup is backed up on a separate device.")
    print("- [ ] Verify we have at least 5G of free space. (`invoke show-disk-space`)")


@task
def review_backups(c):
    print('Lines in dpkg backup:')
    c.run(f'cat {HOME}/backup/*.dpkg | wc -l')
    print('Files in /etc backup:')
    c.run(f'tar tf {HOME}/backup/etc.backup.*.tar.gz | wc -l')
    print('Ensure sources are backed up:')
    c.run(f'tar tf {HOME}/backup/etc.backup.*.tar.gz | grep etc/apt/sources')
    c.run(f'ls -al --block-size=M {HOME}/backup')
    checklist(c)


@task
def backup(c):
    backup_package_list(c)
    backup_sources_list(c)
    backup_etc(c)
    review_backups(c)
```

