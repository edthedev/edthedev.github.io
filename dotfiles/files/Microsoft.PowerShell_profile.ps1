$env:src = "$HOME\src"
$env:dotfiles = Join-Path $HOME "dotfiles"
$env:journal = Join-Path $HOME "Journal"
$env:nvim = Join-Path $HOME "\AppData\Local\nvim"

if($IsWindows) {
	$env:journal = Join-Path $HOME "Box\Journal"
	$env:nvim = Join-Path $HOME "\AppData\Local\nvim"
}


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
function journal {
    param(
        [ValidateSet('limited','shared','journal', 'dotfiles', 'nvim')]
        [string]$key,
        [switch]$limited = $false,
        [switch]$shared = $false,
        [switch]$dotfiles = $false
    )
    $path = $journal
    switch($key){
        'limited' { $path = "$HOME\Box\SecDevLimited" }
        'shared' { $path = "$HOME\Box\Privacy & Cybersecurity\Cybersecurity Development" }
        'journal' { $path = "$HOME\Box\Journal" }
        'dotfiles' { $path = $env:dotfiles }
        'nvim' { $path = $env:nvim }
    }
    cd $path; nvim $path
}

function dotfiles {
    nvim "$HOME\dotfiles"
}

function open {
    param (
        [string]$searchText
    )
    $directories = @(
        "$HOME\Box\Journal",
        "$HOME\Box\SecDevLimited",
        "$HOME\Box\Privacy & Cybersecurity\Cybersecurity Development"
    )

    $totalFiles = 0
    $processedFiles = 0

    foreach ($directory in $directories) {
        if (Test-Path $directory) {
            $totalFiles += (Get-ChildItem -Path $directory -Recurse -File).Count
        } else {
            Write-Host "Directory '$directory' does not exist."
        }
    }

    $resultFiles = @()
    $textFileExtensions = @(".txt", ".log", ".csv", ".json", ".xml", ".md")
    foreach ($directory in $directories) {
        Get-ChildItem -Path $directory -Recurse -File | Where-Object { $textFileExtensions -contains $_.Extension } | ForEach-Object {
            $fileContent = Get-Content -Path $_.FullName -Raw
        
            if ($fileContent -match $searchText) {
                $resultFiles += $_.FullName
            }
            $processedFiles++
                Write-Progress -Activity "Searching Files" -Status "$processedFiles / $totalFiles files processed" -PercentComplete (($processedFiles / $totalFiles) * 100)
        }
    }
    nvim $resultFiles
}


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

$env:nvim_config = "$HOME\AppData\Local\nvim"

# Load local source modules
# Import-Module $env:src\powershell-scripts\modules\MarkdownGitHub.psm1

# Let's face it, I'm about to cd into my source directory
if((Get-Location).Path -eq $HOME){ cd $env:src }
