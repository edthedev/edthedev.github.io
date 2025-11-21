
echo "************** Link PowerShell profile"
mkdir -p ~/.config/powershell/
mv ~/.config/powershell/Microsoft.PowerShell_profile.ps1 ~/.config/powershell/profile.backup.ps1
ln -s ~/dotfiles/files/Microsoft.PowerShell_profile.ps1 ~/.config/powershell/Microsoft.PowerShell_profile.ps1 

echo "************** Choose Shell: PowerShell"
chsh --shell /usr/bin/pwsh
