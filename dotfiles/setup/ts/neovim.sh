NVIM_CONFIG=$HOME/.config/nvim
NVIM_DOTFILES=$HOME/dotfiles/files/neovim

mkdir -p $NVIM_CONFIG
mkdir -p $NVIM_CONFIG/lua

mv $NVIM_CONFIG/init.lua $NVIM_CONFIG/init.lua.bak
ln -s $NVIM_DOTFILES/init.lua $NVIM_CONFIG/init.lua

mv $NVIM_CONFIG/lua/nvjournal.lua $NVIM_CONFIG/lua/nvjournal.lua.bak
ln -s $NVIM_DOTFILES/nvjournal.lua $NVIM_CONFIG/lua/nvjournal.lua

ls -al $NVIM_CONFIG | grep bash
ls -al $NVIM_CONFIG/lua | grep bash

