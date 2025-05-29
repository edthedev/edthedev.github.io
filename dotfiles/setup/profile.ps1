<#
.SYNOPSIS

Setup EdTheDev's PowerShell Profile

.NOTES

#>

# Setup my PowerShell Profile (on Windows)
if(-Not(Test-Path -Path $profile)) {
  New-Item -Path "$profile" -ItemType File
}

# Install Stub PowerShell Profile that sources the one from DotFiles
$sourceMeFile = "$pwd\files\Microsoft.PowerShell_profile.ps1"
$sourceMeLine = '$profileContents = [string]::join([environment]::newline, (get-content -path '
$sourceMeLine += $sourceMeFile
$sourceMeLine += '));invoke-expression $profileContents'

$profileStuff = Get-Content -Path $profile 
if($profileStuff -Contains $sourceMeLine) {
    Write-Host "Found profile source line: $sourceMeLine"
    Write-Host "in file $profile"
}
else {
    Write-Host "Profile source line will be added to $profile"
    Add-Content -Path $profile -Value "" # Blank line to enforce newline.
    Add-Content -Path $profile -Value $sourceMeLine
}
