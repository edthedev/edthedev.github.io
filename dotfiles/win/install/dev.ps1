if(-Not(Test-Path -Path ~/.installed)) {
	New-Item -ItemType Directory -Path ~/.installed
}

if(-Not(Test-Path -Path ~/.installed/dev)) {
  choco install docker-desktop
  choco install powershell-core
  choco install make # Install GNU Make for Windows
  choco install act-cli # GitHub action runner
	# PowerShell git aware prompt
	PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force 
  New-Item -ItemType File -Path ~/.installed/dev
}

if(-Not(Test-Path -Path ~/.ssh/id_rsa.pub)) {
  choco install gnupg
	gpg --full-generate-key
}

Get-ChildItem -Path ~/.installed