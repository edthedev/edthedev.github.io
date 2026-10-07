$RegistryPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\GameDVR'

$Name         = 'AllowgameDVR'
$Value        = '00000000'
New-Item -Path $RegistryPath -Force
# Set-ItemProperty -Path $RegistryPath -Name $Name -Value $Value -Force 
New-ItemProperty -Path $RegistryPath -Name $Name -Value $Value -PropertyType DWORD -Force 
