<#
.SYNOPSIS

Setup Vim in EdTheDev's preferred configuration.

.DESCRIPTION

Installs Vim-Plug for plugin management.
Assumes my local vimrc is sitting in C:\src\dotfiles

.NOTES

Be sure to run :PlugInstall within Vim afterwards.

#>
# Install vim-plug
iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
    ni $HOME/vimfiles/autoload/plug.vim -Force

# Deploy a stub file to source my vimrc when on Windows.
cp win_vimrc ~/.vimrc

Write-Host "Be sure to run PlugInstall within Vim."