mv ~/.bashrc ~/bashrc.bak
ln -s ~/dotfiles/files/bashrc ~/.bashrc
mv ~/.profile ~/profile.bak
ln -s ~/dotfiles/files/profile ~/.profile
ls -al ~/ | grep bash
