<#
.SYNPOSIS

Commands to maintain a local code singing cert.

This is a hack to solve allowing PowerShell to trust a PowerShell profile hosted on a UNC path, without allowing 'Unrestricted' execution policy.

I created this because it annoys me that my mandatory UNC path profile counts as a remote script, and I'm too pedantic to un-restrict all remote scripts just to allow my profile to load.

.NOTES

Works fine under PowerShell Core 6 with ExecutionPolicy RemoteSigned. PowerShell 7

.EXAMPLE

Set-ExecutionPolicy RemoteSigned

Import-Module c:\src\dotfiles\psmodules\sign.psm1

# Make a cert

> New-CodeSignCert 
# Install it - you will be promted whether to trust it.

> Install-CodeSignCert 

# Sign your UNC path PowerShell profile
> Invoke-CodeSign $profile


#>
$certName = "Local Code Sign Cert"
$codeSigning = ""

function New-CodeSignCert {
	$cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Type CodeSigningCert -Subject $certName -KeyAlgorithm RSA -KeyLength 2048 -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -KeyUsage "DigitalSignature"

}

function Get-CodeSignCert {
	$certName = "Local Code Sign Cert"
	return Get-ChildItem -Path Cert:\CurrentUser\My | Select-Object -First 1
# 	| ? Subject -EQ "CN=$certName"
}

function Install-CodeSignCert {

	$cert = Get-CodeSignCert
	Move-Item -Path $cert.PSPath -Destination "Cert:\CurrentUser\Root"
}

function Invoke-CodeSign {
	param(
		[string]$Path
	)
	$cert = Get-CodeSignCert
	Set-AuthenticodeSignature -FilePath $Path -Certificate $cert
}

function Invoke-CodeSignProfile {
	Invoke-CodeSign -Path $profile
}

Export-ModuleMember -Function New-CodeSignCert
Export-ModuleMember -Function Get-CodeSignCert
Export-ModuleMember -Function Install-CodeSignCert
Export-ModuleMember -Function Invoke-CodeSign
Export-ModuleMember -Function Invoke-CodeSignProfile
