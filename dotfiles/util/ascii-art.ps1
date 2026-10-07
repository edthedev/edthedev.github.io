

## Setup reminder:
# code $profile
# Set-ExecutionPolicy RemoteSigned
# . C:\src\dotfiles\Microsoft.PowerShell_profile.ps1


Import-Module posh-git
# Courtesty of MKletz
# Get-ChildItem -Path 'C:\Repos' -Filter "*.psd1" -Recurse | ForEach-Object -Process {
#     $Path = Split-Path -Path $_.Directory -Parent
#     $env:PSModulePath = $env:PSModulePath + ";$($Path)"
#}
$env:PSModulePath = $env:PSModulePath.Replace("\\ad.uillinois.edu\techsvc\home\$($ENV:USERNAME)\Documents\PowerShell\Modules;",'')

# Kali linux env
$ENV:PATH +=":/home/delaport/development/flutter/bin" # Flutter in Kali under WSL

# Some Paths that are annoying to find/restore if the installer fails
$ENV:PATH+=";C:\Program Files\Microsoft VS Code\bin" # One Editor to rule them all
$ENV:PATH+=";C:\Program Files\Python38\Scripts\;C:\Program Files\Python38\" # Python latest as of 2019 December
$ENV:PATH+=";C:\ProgramData\DockerDesktop\version-bin;C:\Program Files\Docker\Docker\Resources\bin" # Docker for R Studio and Jupyter
$ENV:PATH+=";C:\Program Files (x86)\Common Files\Oracle\Java\javapath" # Don't remember why I still care about Java.
$ENV:PATH+=";C:\Program Files\Git\cmd" # Version control is nice.
$ENV:PATH+=";C:\ProgramData\chocolatey\bin" # Package management is nice.
$ENV:PATH+=";C:\Program Files\nodejs" # KataKoda wants to add tools via npm
$ENV:PATH+=";C:\PENGUIN" # Flag to ensure my profile kicked in.


function Find-LargeFiles() {
   Get-ChildItem c:\ -r| sort -descending -property length | select -first 10 name, Length, FullName
}

function List-DriveSpace() {
  Get-PSDrive C | Select-Object Used,Free
}


function Start-Vault() {
  consul agent -dev # Run in Dev Mode
  vault sever -config c:\src\dotfiles\vaultconfig.hcl -address=http://127.0.0.1:8200 # Use local dev Consul as storage
}

function New-DockerRStudio() {
  docker run --name=rpython -Pit -p 8888:8888 -p 8787:8787 -p 8022:22 -p 6006:6006 -v c:\src\data:/mnt/data datascienceschool/rpython
}
function Start-DockerRStudio() {
  docker start rpython
  jupyter notebook list
  Write-Host "R Studio is running at http://localhost:8787/"
  Write-Host "Jupyter is running at http://localhost:8888/"
}

function Start-DockerOWASPZap() {
  Param(
    [string]$URL
  )
  # https://github.com/zaproxy/zaproxy/wiki/Docker
  docker run owasp/zap2docker-stable
  docker run -i owasp/zap2docker-stable zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' $URL
  Write-Host "https://github.com/zaproxy/zaproxy/wiki/Docker"
}


function Start-DockerWebGoat() {
  docker pull webgoat/webgoat-8.0 
  docker run -p 8080:8080 -t webgoat/webgoat-8.0
  Write-Host "Vulnerable Webgoat running on 8080"
}

function Start-DockerJuiceShop() {
  docker pull bkimminich/juice-shop
  docker run --rm -p 3000:3000 bkimminich/juice-shop
  Write-Host "Vulnerable Juice Shop running on 3000"
}

function Start-DockerGrafana() {
  docker run --rm -d --name=grafana -p 3001:3001 -user $ID --volume "C:\src\data:/var/lib/grafana" grafana/grafana
  Write-Host "Grafana running on 3001"
}

# Import some home grown PowerShell modules, if they are installed.
$modPaths = @("C:\src\dotfiles\ToyBox\toybox.psm1")
$modPaths | ForEach-Object {
  $_ | Format-Table
  if(Test-Path -Path $_) {
    Import-Module $_
    Write-Host "Loaded $_"
  }
}

function Start-DockerPython3Bash {
  docker run -it python /bin/bash
}

function Start-DockerPython2Bash {
  docker run -it python:2-buster /bin/bash
}

function Stop-Docker {
  docker stop $(docker ps -a -q)
}

function New-DockerAirflow {
  docker run -v ./:/etc/myscripts apache/airflow /bin/bash /etc/myscripts/airflow.sh

}

function Start-DockerAirflow {
  docker run airflow -f webserver
}

function Start-DockerFindSecrets {
  # docker run -v "$((Get-Item .).FullName)":/etc/src dxa4481/trufflehog /bin/bash
  # Write-Host "Current folder mounted as /etc/src"
  docker run -v /c/src:/etc/src dxa4481/trufflehog /etc/src/SecOps-Tools
}

function Export-VSCodeExtensions {
  code --list-extensions | Out-File -FilePath /src/dotfiles/vscode-extensions.txt
  Get-Content -Path /src/dotfiles/vscode-extensions.txt
}


#requires -version 5.1
#ConvertTo-ASCIIArt.ps1
 
<#
font list at https://artii.herokuapp.com/fonts_list
font names are case-sensitive
 
invoke-restmethod https://artii.herokuapp.com/fonts_list
 
#>
 
<#
.SYNOPSIS
Output strings as ASCII art fonts.

.EXAMPLE
cart "Testing"-Font cursive

.NOTES
From https://jdhitsolutions.com/blog/powershell/7278/friday-fun-powershell-ascii-art/
#>
Function ConvertTo-ASCIIArt {
  [cmdletbinding()]
  [alias("cart")]
  [outputtype([System.String])]
  Param(
      [Parameter(Position = 0, Mandatory, HelpMessage = "Enter a short string of text to convert", ValueFromPipeline)]
      [ValidateNotNullOrEmpty()]
      [string]$Text,
      [Parameter(Position = 1,HelpMessage = "Specify a font from https://artii.herokuapp.com/fonts_list. Font names are case-sensitive")]
      [ValidateNotNullOrEmpty()]
      [string]$Font = "big"
  )

  Begin {
      Write-Verbose "[$((Get-Date).TimeofDay) BEGIN] Starting $($myinvocation.mycommand)"
  } #begin

  Process {
      Write-Verbose "[$((Get-Date).TimeofDay) PROCESS] Processing $text with font $Font"
      $testEncode = [uri]::EscapeDataString($Text)
      $url = "http://artii.herokuapp.com/make?text=$testEncode&font=$Font"
      Try {
          Invoke-Restmethod -Uri $url -DisableKeepAlive -ErrorAction Stop
      }
      Catch {
          Throw $_
      }
  } #process
  End {
      Write-Verbose "[$((Get-Date).TimeofDay) END    ] Ending $($myinvocation.mycommand)"
  } #end
}


#### User Configuraable Variables ####
## https://github.com/techservicesillinois/Powershell-SupportApp

# Customize the title bar of your console.
[string]$SA_title="PowerShell Support App for U of I"
# Path to a text editor
[string]$SA_TextEditor="C:\Program Files (x86)\Notepad++\notepad++.exe"
$SA_Config_base=$true
# import-module .\PowerShellSupportAppV2\PowerShellSupportAppV2.psm1

# Aliases for Minion
New-Alias mn ~/src/minion/mn.ps1
New-Alias today "/usr/bin/vim $(mn -today)"

