# Reminder to future self:
# Step 0: git clone https://github.com/edthedev/dotfiles
# Step 1: Run this bootstrap script.

mkdir -p ~/.installed

if [ ! -d ~/dotfiles ]; then
	echo "************** Install Git"
	sudo apt-get install -y git
fi

if [ ! -f ~/.vimrc ]; then
	echo "************** Install Vim"
	sudo apt-get install -y vim-nox
fi

# if [ ! -f ~/.config/powershell/Microsoft.PowerShell_profile.ps1 ]; then
# 	echo "************** Install PowerShell"
# 	sudo apt-get install -y powershell
# fi

if [ ! -f ~/.screenrc ]; then
	echo "************** Install Screen"
	sudo apt-get install -y screen
fi

# echo "************** Install Midnight Commander"
# sudo apt-get install mc
