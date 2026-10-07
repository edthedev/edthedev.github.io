
# I trust PSGallery
Set-PSRepository -Name 'PSGallery' -InstallationPolicy Trusted

# Install nice Git stuff.
PowerShellGet\Install-Module posh-git -Scope CurrentUser -AllowPrerelease -Force