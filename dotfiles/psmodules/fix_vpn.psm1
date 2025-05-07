function Invoke-FixWslVPN {
	Get-NetAdapter | Where-Object {$_.InterfaceDescription -Match "Cisco AnyConnect Secure Mobility Client Virtual Miniport Adapter for Windows x64"} | Set-NetIPInterface -InterfaceMetric 6000
}
Export-ModuleMember -Function Invoke-FixWslVPN