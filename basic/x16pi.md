---
layout: basic.njk
title: BASIC Programs by Edward Delaporte
---

## X16 Emulator on Raspberry Pi

This recipe worked for me on Raspbian on a Pi 4.

### Install dependencies.

Install the dependencies.
Run these commands with `sudo`.
```
apt install make cc65 git
apt install libsdl2-dev
```

### Build the software.

This recipe creates the `x16emu` executable at `~/x16/x16-emulator/x16emu`.
If you decide to move it, be sure to also move `rom.bin`.

Build the ROM.
```sh
mkdir -p ~/x16

cd ~/x16
git clone https://github.com/commanderx16/x16-rom.git
cd x16-rom
make
```

Build the emulator.
```
cd ~/x16
git clone https://github.com/commanderx16/x16-emulator.git
cd x16-emulator
make
```

Copy the ROM to the emulator folder.
```
cp ~/x16/x16-rom/build/x16/rom.bin ~/x16/x16-emulator/
```
### Further Reading

+ [How to capture the output of BASIC programs with X16 Emulator](/basic/howto/)
