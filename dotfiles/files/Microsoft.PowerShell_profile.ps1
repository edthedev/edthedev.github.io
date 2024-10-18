$env:src = "$HOME\src"
$env:dotfiles = "$HOME\dotfiles"
Import-Module $env:dotfiles\psmodules\add_to_profile.psm1
Add-ToProfile $env:dotfiles\files\paths.ps1
Add-ToProfile $env:dotfiles\files\env.ps1

# Delay loading PoshGit for speed. 
function Enable-PoshGit {
	Import-Module posh-git
}
New-Alias pg    Enable-PoshGit

Set-Alias code codium  # Prefer Codium

# Dashboard
New-Alias dash   Show-MyDashboard # from dash.psm1
New-Alias today Get-JournalAgenda

# Vi
New-Alias vi nvim
New-Alias vim nvim

# You can pry my unix commands out of my cold dead fingers
if($iswindows) {
	Set-Alias which get-command
}
# Reject Windows heritage, act like Vi
# Set-PSReadlineOption -HistorySavePath $env:src\PSHistory.log
Set-PSReadlineOption -BellStyle Visual
Set-PSReadlineOption -ViModeIndicator Prompt
Set-PSReadlineOption -EditMode Vi

Write-Host "+ Type 'pg' to enable PoshGit"
Write-Host 'See $env:realProfile for version controlled profile file.'

# Load dotfiles modules
$env:psmodules = "$env:dotfiles\psmodules"
Import-Module "$env:psmodules\dash.psm1"
Import-Module $env:psmodules\file_management.psm1
Import-Module "$env:psmodules\fix_vpn.psm1"

$maybe_mods = @(
	"$env:src\travel-times\travel-times.psm1",
	"$env:src\powershell-scripts\modules\AgileGitHubCLI.psm1"
	)
$maybe_mods | ForEach-Object {
	if(Test-Path $_) {
		Import-Module $_
	} else {
		Write-Host "Not found: $_"
	}
}


# Load local source modules
# Import-Module $env:src\powershell-scripts\modules\MarkdownGitHub.psm1

# Let's face it, I'm about to cd into my source directory
if((Get-Location).Path -eq $HOME){ cd $env:src }
