## Setup GitHub Key

1. Add new key to GitHub

	```sh
	cat ~/.ssh/id_rsa.pub
	```
	
	Visit <https://github.com/settings/keys>

1. Switch `dotfiles` to use SSH key access 

	Edit `.git/config`:
	
	```ini
	url = git@github.com:edthedev/dotfiles.git
	```

## Setup GitHub CLI

1. Install

	```powershell
	winget install --id GitHub.cli
	```

2. Authorize

	```powershell
	gh auth login
	```

## Setup PowerShell for GitHub

1. Install PowerShell for GitHub

	```powershell
	Install-Module -Name PowerShellForGitHub -Scope CurrentUser
	Set-GitHubConfiguration -DisableTelemetry

	```

1. Authorize PowerShell for GitHub

  Generate a classic token at <https://github.com/settings/tokens?type=beta>
  Select all the permissions that start with `read`, skip the ones I clearly don't care about. If you're not me, and reading this...use your judgement, and good luck.

  Now run:
  ```powershell
  set-githubauthentication
  ```
  and paste the token into password, and set the username to 'Slartibarfast'.

3. Clone my multi-repo helper scripts

	```powershell
	cd ~/src
	git clone git@github.com:uillinois-community/powershell-scripts.git
	```

4. Review the available commands

	```powershell
	get-command -module MarkDownGitHub
	get-command -module AgileGitHub
	```