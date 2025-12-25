
## Remote Access

Under Preferences

+ Change Password
+ Under Interfaces - Enable SSH and VNC

On a Windows computer:

```powershell
choco install vnc-viewer
```

VNC remote host will be `raspberrypi.local`.
User is `pi`. Password is whatever you set in the step above.

## Overclock

Watch your speed with one of these commands:
```bash
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq
vcgencmd measure_clock arm
watch -n 1 vcgencmd measure_clock arm
```

To edit the overclock setting:
```bash
sudo vi /boot/config.txt
```

```ini
# uncomment to overclock the arm. 700 MHz is the default.
over_voltage=6
arm_freq=2000
```

Reboot to apply changes.

```bash
sudo reboot
```

[Explanation of availabe over-clock settings](https://haydenjames.io/raspberry-pi-3-overclock/)

## Set up for TV Use

### Change Scale

+ Right-Click
+ Desktop Preferences
+ System
+ Font: 22+
+ Mouse Cursor: Large


## Set up for TV Remote Control

### TODO: Install XMBC / Kodi

Once called XBox Media Center.

Maybe install Kodi or [OSMC](https://osmc.tv/download/)

Simplest is to image the whole install...
https://www.raspberrypi.org/documentation/usage/kodi/README.md

```powershell
sudo apt install kodi
```

### TODO: Commands from TV remote into Pi

HDMI can send TV remote commands to the Pi via [CEC](https://github.com/Pulse-Eight).

List connected devices:

```powershell
cec-client -l
```

List available commands
```powershell
echo h | cec-client -s -d 1
```



[Reference](https://ownyourbits.com/2017/02/02/control-your-raspberry-pi-with-your-tv-remote/)