## Setup Vundle for Vim
if [ ! -d ~/.vim/bundle ]; then
	echo "************** Setup Vundle for Vim"
 	git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim
	vim +BundleInstall +qall
fi
