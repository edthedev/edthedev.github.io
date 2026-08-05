
## Getting Started - Windows

> Note: Bookmark this guide. You're going to reboot at least a few times.

Optional - change host name
```
Rename-Computer -NewName FOOOOOOO -Restart
```

1. [Install chocolatey](https://chocolatey.org/install)

2. Tell `choco` to watch for reboots, as this is Windows.
```
choco feature enable -name=exitOnRebootDetected
```

3. Install a decent terminal. This invokes a bunch of KBs.
```powershell
choco install microsoft-windows-terminal # reboot after
```

3. Set dark theme (non-admin prompt)
```
Set-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name AppsUseLightTheme -Value 0
```

4. Reboot after first setup - you may see errors in `choco` commands otherwise.
5. Set the PC time zone correctly - otherwise expect an install error in later `choco` commands.

4. More packages
```
choco install git 
choco install vscode
choco install powertoys # reboot after
```

```
git clone https://github.com/edthedev/dotfiles.git
cd dotfiles
code .
```

Admin prompt:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

Install VSCode plugins:
```
.\setup\code-plugins.ps1
```

Set git username.
```
git config --global user.email "edward@delaporte.us"
git config --global user.name "Edward Delaporte"
```


## Setup PowerShell Profile

Edit your actual profile,
```
code $profile
```

And add something like:

``` powershell
$env:realProfile = "$HOME\dotfiles\files\Microsoft.PowerShell_profile.ps1"
$profileContents = [string]::join([environment]::newline, (get-content -path $env:realProfile));invoke-expression $profileContents
```
