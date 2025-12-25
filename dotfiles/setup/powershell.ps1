Write-Host "Require remote scripts to be signed."
Set-ExecutionPolicy RemoteSigned
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted # Trust PowerShell Gallery
Install-Module posh-git
Install-Module -Name PowerShellForGitHub