## Getting Started - Raspberyy Pi

### Get Online

```sh
rasppi-config
```

+ Set up wireless
+ Set keyboard location

### Clone this repository

```sh
sudo apt-get install git
git clone https://github.com/edthedev/dotfiles.git
```

### Create a new user

```sh
sudo useradd bob -m -G sudo
sudo passwd bob
sudo passwd pi
```

### Boostrap CLI

```
sudo ./install_cli_basics.sh
```

## Installations

See the `\install` folder for scripts to install various handy utilities. Most of these rely on `Apt` on Linux, or `Chocolatey` on Windows.

## Setups

See the `\setup` folder for configurations.
These are, obviously, just my preferred configurations.

In general, these work by setting up symlinks on Linux, and on Windows by copying a stub file that sources the versioned file. 

Most of these are cross platform `.ps1` files that run under PowerShell.
