# Docker Pirate

## On Building the Image

A Raspberry Pi network connected Docker host.

+ https://blog.hypriot.com/faq/
+ https://github.com/hypriot/image-builder-rpi/releases

See existing volumes.
```
lsblk
```

Use the `dd` command from the tutorial.

```
sudo dd if=hypriotos-rpi-v1.12.3.img of=/dev/<new thing that showed up> bs=1M
```

## On Finding the Image

No wireless support in the image.
Plug into the network directly.

```
sudo apt install nmap
hostname -I
nmap -sP <ip from command above>.0/24
```

## Updates

Remember to change the default username and password.

```
sudo raspi-config
```

To update the hostname:

```sh
ssh pirate@black-pearl.lan
sudo vi /boot/user-data
sudo reboot now
```
