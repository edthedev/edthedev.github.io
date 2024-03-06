rm ~/.config/VSCodium/User/settings.json
ln -s ~/dotfiles/files/vscodium/settings.json ~/.config/VSCodium/User/settings.json

rm ~/.config/VSCodium/User/keybindings.json
ln -s ~/dotfiles/files/vscodium/keybindings.json ~/.config/VSCodium/User/keybindings.json


codium --install-extension benjpas.close-all
codium --install-extension vscodevim.vim
codium --install-extension pajoma.vscode-journal
codium --install-extension ban.spellright
# codium --install-extension tomasr8.close-all-but-this
codium --install-extension bierner.markdown-mermaid
# codium --install-extension brunnerh.insert-unicodium
codium --install-extension ms-vscode-remote.vscode-remote-extensionpack
# codium --install-extension rioj7.vscodium-json-validate
# codium --install-extension yzhang.markdown-all-in-one
# codium --install-extension ZainChen.json
