if [ ! -d ~/dotfiles ]; then
	echo "************** Cloning Dotfiles Directory"
	cd ~; git clone git@github.com:edthedev/dotfiles.git
fi

if [ ! -f ~/.bashrc ]; then
	echo "************** Setup Bash"
	~/dotfiles/setup/bash.sh
fi

if [ ! -f ~/.screenrc ]; then
	echo "************** Setup Screen"
	ln -s ~/dotfiles/files/screenrc ~/.screenrc
fi

if [ ! -f ~/.gitconfig ]; then
	echo "************** Configure Git user"
	git config --global user.email "edward@delaporte.us"
	git config --global user.name "Edward Delaporte"
	git config --global pull.ff only
	git config --global core.editor /usr/bin/vi
fi

if [ ! -f ~/.vimrc ]; then
	echo "************** Link Vimrc"
	ln -s ~/dotfiles/files/vimrc ~/.vimrc
	ls -a ~ | grep vim
fi

if [ ! -f ~/.ssh/id_ed25519 ]; then
	echo "************** Generate an SSH key"
	ssh-keygen -t ed25519

	echo "************** Reminder to setup GitHub key"
	cat ~/dotfiles/doc/GitHubKey.md
	cat ~/.ssh/id_ed25519.pub
fi

echo "************** Status: Symlinks "
ls -la ~ | grep "\->"
echo "************** Status: Git Config"
cat ~/.gitconfig
echo "************** Status: Pubkey "
cat ~/.ssh/id_ed25519.pub