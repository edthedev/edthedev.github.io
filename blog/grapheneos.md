---
layout: blog.njk
title: Misuing Ansible to Void my Phone Warranty
tags: ['blog', 'rss']
---

I wrote an [Ansible role for GrapheneOS][7] to configure `localhost` in preparation for installing `GrapheneOS` on a USB connected smartphone.

The more familiar a person is with [Ansible][8], the less sense the previous sentence probably makes.

[7]: https://github.com/edthedev/ansible-grapheneos
[8]: https://www.ansible.com/

## Questions

I'm sure you have questions. So do I.

> Why?! Just why?

I've had [scripts to quickly setup my laptop][20] for a long time. 
I want the same reliability when I get a new phone.

[20]: https://github.com/edthedev/dotfiles

> And why GrapheneOS?

- [GrapheneOS][27] is a privacy centric build of Android. The 'street cred' I get as a Cybersecurity professional is worth the effort.
- I also wanted to see just how locked or open my phone hardware is. After all, [If you can't fix it, you don't own it.](https://hackaday.com/2015/09/15/the-rise-of-the-fix-it-culture/)
- I also enjoy the experience on GrapheneOS much more than stock Android. Being open source, GrapheneOs open comes with [a lot less crapware](https://craphound.com/tag/enshittification/).

[27]: https://grapheneos.org/

> Ansible is meant for large scale server orchestratiion, but you used it to manage your phone?

Only sort of. Barely. It hardly counts.

> Do you owe the Ansible team some kind of apology?

Probably.
