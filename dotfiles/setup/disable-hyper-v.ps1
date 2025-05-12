Write-Host "Recipe to help VMWare play nice."
Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Hypervisor
bcdedit /set hypervisorlaunchtype off # auto to turn back on
Write-Host "Start - GPEdit - Computer Configuration -> Administrative Templates -> System -> Device Guard - Turn on Virtualization Based Security"
Write-Host "You may need to restart."