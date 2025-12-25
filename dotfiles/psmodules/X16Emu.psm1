
# Set-Alias renumber $HOME/src/x16-demo/
function Invoke-X16Emu {
	param(
		[string]$File
	)
	x16emu.exe -bas $File -keymap en-us
}

New-Alias x16   Invoke-X16Emu