" -------------------------------------------------------
"
"       EdTheDev's .vimrc 
"
" -------------------------------------------------------

" Let the leader key be ,  
let mapleader=","

" Easier Ex commands
nnoremap ; :

" iPad and Android keyboards have no ESC Key
inoremap ii <esc>

set smarttab

set nocompatible              " be iMproved, required

set omnifunc=syntaxcomplete#Complete

filetype off                  " required

" =================
" Install vim-plug if missing
" =================
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
"  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" =================
" Here be Plugins!
" =================
call plug#begin('~/.vim/plugged')

" Markdown highlighting
" Plug 'tpope/vim-markdown'
" Plug 'plasticboy/vim-markdown'
" let g:markdown_github_languages = ['sh', 'python']

" Distraction free writing.
Plug 'junegunn/goyo.vim'

" Better status line.
Plug 'bling/vim-airline'

" Plugin 'Windows-PowerShell-Syntax-Plugin'

" PowerShell Highlighting and detection
Plug 'pprovost/vim-ps1'

" Much better theme
" Plug NLKNguyen/papercolor-theme
"
"
" Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }

call plug#end()

filetype plugin indent on     " required for Vundle Bundle

nnoremap <leader>w :Goyo<Cr>

" If not something else, then assume Markdown
set filetype=markdown
set syntax=markdown

" Don't show tabs for HTML files. Do show trailing spaces."
au FileType html set nolist
au FileType javascript set nolist

set softtabstop=4 " makes the spaces feel like real tabs

" Sensible default for everything else.
set tabstop=2
set shiftwidth=2

" Working with Go
au BufNewFile,BufRead *.go set noet ts=2 sw=2 sts=2

" Working with Markdown

au BufNewFile,BufFilePre,BufRead *.md set filetype=markdown
colorscheme elflord
set bg=dark
set number

set backupdir=c:\temp,.backup/,~/.backup/,/tmp//
set directory=c:\temp,.swp/,~/.swp/,/tmp//
set undodir=c:\temp,.undo/,~/.undo/,/tmp//
set backspace=indent,eol,start " Do not be pedantic about backspace.
