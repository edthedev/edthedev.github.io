mkdir -p ~/x16

cd ~/x16
git clone https://github.com/commanderx16/x16-rom.git
cd x16-rom
make

cd ~/x16
git clone https://github.com/commanderx16/x16-emulator.git
cd x16-emulator
make

cp ~/x16/x16-rom/build/x16/rom.bin ~/x16/x16-emulator/
