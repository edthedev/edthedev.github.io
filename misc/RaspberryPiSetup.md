# Raspberry Pi Setup

This is a recipe for an ultra fast command-line Raspberry Pi for the purpose of learning programming.

The assumed use case is that you have a separate computer or phone nearby to use for research, and just want a really fast machine with a small predictable setup to test your code.

## Start with a the Lite Raspberry Pi image.

Choose `Raspberry Pi OS Lite (32 bit)` in Raspberry Pi Imager.
This article last updated for v1.5.

Once the Pi is booted. Login as the `pi` user using the default password.

## Change the Default Password

Before we go online, we want to change the default password.

> passwd

I recommend using a password manager to generate and store a strong password.

## Localization

Our priority is to get online so we can install the additional packages we need.

But, setting localization first helps the Pi be better at finding your wireless router, since router specifications vary by region of the world.

> sudo raspi-config

Choose `System - Localization`

Select your language and region. For example `en.UTF8` means English with Unicode.

## Setup Networking

+ Choose `System Options` and then `Wireless LAN`.
+ Set your region (you can type the first letter to jump ahead in the list), and then enter your network SSID and then your wireless password.
+ Next the system will need to reboot.

## System Update

> sudo apt-get update -y
> sudo apt-get upgrade -y

## Install Git

> sudo apt-get install git



## Clone the Setup Files

This bit will vary by the environment you want to set up, but should look something like this:

> git clone <instructors git repository> setup
> cd setup
> sudo ./install.sh
> ./setup.sh

I recommend putting the commands that need `sudo` permission into `install.sh` and the commands that do not require `sudo` into `setup.sh` as a convention.

Ideally all commands in `install.sh` require no user interaction, while commands in `setup.sh` might prompt the end user for some user specific information - i.e. which lesson they are setting up to work through.

## Personal User

Optionally, we can stop acting as the `pi` user.

> useradd bob
> sudo su bob