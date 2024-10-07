
echo "************** Link PowerShell profile"
mkdir -p ~/.config/powershell/
mv ~/.config/powershell/Microsoft.PowerShell_profile.ps1 ~/.config/powershell/profile.backup.ps1
ln -s ~/dotfiles/files/Microsoft.PowerShell_profile.ps1 ~/.config/powershell/Microsoft.PowerShell_profile.ps1 

echo "************** Install PowerShell"
sudo snap install powershell --classic

if ! [ -f /etc/shells ] || ! grep -q '^/snap/bin/powershell$' /etc/shells; then
  echo "************** Add PowerShell to /etc/shells"
  echo '/snap/bin/powershell' | sudo tee -a /etc/shells
fi

echo "************** Choose Shell: PowerShell"
chsh --shell /snap/bin/powershell
