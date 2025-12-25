<#
.SYNOPSIS

Find 10 largest files on the C drive.

#>
function Show-LargeFiles() {
	param(
		[int]$Max=10,
		[string]$path="C:\Users"
	)
	Get-ChildItem $path -r | sort -descending -property length | select -first $Max name, Length, FullName
}

<#
.SYNPOSIS

Display the free space on the C drive.

#>
function Show-Drivespace() {
	Get-PSDrive C | Select-Object Used,Free | ForEach {
		Write-Host "Free space GB: " ($_.Free / 1GB)
		Write-Host "Used space GB: " ($_.Used / 1GB)
	}
}

function Show-DrivespacePretty() {
	Start-Job -Name "FileCollection" -ScriptBlock { Show-Drivespace }
While((Get-Job -Name "FileCollection").State -eq "Running") {
	     Write-Progress -Activity "Collecting Files..." -PercentComplete $x
	If($x -eq 100){
		$x = 1
	}
	Else{
		$x += 1
	}
}
Write-Progress -Activity "Collecting Files..." -Completed
$Files = Get-Job -Name "FileCollection" | Receive-Job
Get-Job -Name "FileCollection" | Remove-Job
}

Export-ModuleMember -Function Show-DriveSpace 
Export-ModuleMember -Function Show-LargeFiles

# Stay awake to allow large transfers to complete
#    without permanently giving up battery saving features
function Invoke-StayAwakeWindows() {
	param($minutes=90)
	$wsh = New-Object -ComObject WScript.Shell
	do{
		"Staying awake for $minutes minutes"
	$minutes-=1;
	# Send Shift+F15
	$wsh.SendKeys('+{F15}')
	Start-Sleep -seconds 59
	}until($minutes -lt 0)
	# Thank you to http://www.zhornsoftware.co.uk/caffeine/
}

Export-ModuleMember -Function Invoke-StayAwakeWindows

function Invoke-StayAwake() {
	param($minutes=90)
	do{
		"Staying awake for $minutes minutes"
		systemd-inhibit sleep 60
		$minutes-=1;
	}until($minutes -lt 0)
}

Export-ModuleMember -Function Invoke-StayAwake
