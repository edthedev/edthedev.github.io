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

## Personal User

We can also stop acting as the `pi` user.

> useradd bob