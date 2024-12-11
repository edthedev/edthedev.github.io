function Add-ToPath {
    param (
        $Path,
		[switch]$Optional=$false
    )
	if(Test-Path $Path){
		if($iswindows) {
			$ENV:PATH+=";$PATH"
		} else {
			$ENV:PATH+=":$PATH"
		}
	} else {
		if(-Not $Optional) {
			Write-Error "Add-ToPath failed for $PATH"
		}
	}
}

if($IsWindows){
	# Some Paths that are annoying to find/restore if the installer fails
	Add-ToPath "C:\Program Files\Git\cmd" # Version control is nice.
	Add-ToPath "C:\Program Files\Microsoft VS Code\bin" -optional # One Editor to rule them all
	Add-ToPath "C:\Program Files\Git\cmd" # Version control is nice.
	Add-ToPath "C:\ProgramData\chocolatey\bin" # Package management is nice.
	Add-ToPath "C:\Program Files (x86)\GnuWin32\bin" -optional # GNU Utils - i.e. rm
	Add-ToPath "C:\bin\x16emu" -optional # X16 Emulator
	Add-ToPath "$env:src\x16-demo\tools" -optional # x16 python tools
	Add-ToPath "$env:src\flutter\bin" -optional # Flutter for Dart
	Add-ToPath "$env:src\bin" -optional # anything else I need
	Add-ToPath "$HOME\bin" -optional # anything else I need

	# Command line tools
	Add-ToPath "$env:src\chart" -optional # command line chart utility edthedev\chart
	Add-ToPath "$env:src\agenda" -optional # command line chart utility edthedev\chart
	Add-ToPath "$env:src\todolist" -optional # todo list utility edthedev\todolist

}
else {
	Add-ToPath "$env:src/bin" -optional # anything else I need
	Add-ToPath "$HOME/bin" # anything else I need
	Add-ToPath "$HOME/x16/x16-emulator" -optional # x16 Emulator
	Add-ToPath "$HOME/src/x16-demo/tools" -optional # x16 python tools

	# Command line tools
	Add-ToPath "$env:src/chart" -optional # command line chart utility edthedev\chart
	Add-ToPath "$env:src/agenda" -optional # command line chart utility edthedev\chart
	Add-ToPath "$env:src/todolist" -optional # todo list utility edthedev\todolist
}
Add-ToPath "$HOME/go/bin" -optional # x16 python tools


# krew for K8S pluginsa - specifically vtrl
Add-ToPath -optional "$HOME/.krew/bin"
Add-ToPath -optional 'C:\Users\delaport\AppData\Roaming\Python\Python312\Scripts'

# $env:path+=";C:\Program Files\Git\bin"
# $env:path+=";C:\Program Files (x86)\Microsoft VS Code\"
