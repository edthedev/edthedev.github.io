
## TODO: Would be clever to make this a DSC module: https://docs.microsoft.com/en-us/powershell/scripting/dsc/quickstarts/website-quickstart?view=powershell-7
Write-Host "Adding ability to switch Joystick"
# https://github.com/meleu/RetroPie-joystick-selection
Write-Host "Enable SSH first via Raspi-Config"
ssh pi@retropi -C 'wget -O- "https://raw.githubusercontent.com/meleu/RetroPie-joystick-selection/master/install.sh" | sudo bash'
Write-Host "Now launch the script via RetroPi Setup - Configuration Tools - Joystick selection"