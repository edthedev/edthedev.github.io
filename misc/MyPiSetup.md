
## Do the Basics

Start with my generic Raspberry Pi setup article.
Get to the point where we have a user who is not named `pi` and does have `sudo` permissions on an up to date headless Lite Rasbian install, which also has the default password changed and wireless networking enabled.

## Use your dotfiles repository.

Your mileage may vary, but you can have a look at [my dotfiles][1] for inspiration.

[1]: https://github.com/edthedev/dotfiles

I generally separate setup playbooks into three categories:

1. Install scripts.

These require root, and they install shared software.

2. Setup scripts

These do not require root, and they configure the software to my liking.

3. Cheat sheets

These are notes on topics that I have not yet fully automated. Expect to have to use the mouse.


## Enable SSH on the Raspberry Pi

Next we want to copy and paste our public key into the GitHub website, but we do not want to install a whole buch of X11 graphical libraries on on Raspberry Pi to do it.

So instead, we are going to enable incoming SSH to the Raspberry Pi.

> sudo raspi-config

`System` - `Interfaces` - `Enable SSH`

Restart.

Verify SSH is running.

> service ssh status

Check the IP address.

> ifconfig

## Advanced Bootstrapping

Generate a new SSH key so that we can `git clone` with an SSH `git@` URL and not have to type in our GitHub password every time we make a local modification and want to push it to the repository.

It if fine to accept the default options.

Remember to run this command from a computer with a web browser that is connected to the same local network as the Pi. 

> ssh pi@192.168.xx.xx
> ssh-keygen

Copy the SSH public key into the [Security tab on GitHub][3].

> cat ~/.ssh/id_rsa.pub

[3]: https://github.com/settings/keys