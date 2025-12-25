<#
.SYNOPSIS
Some notes on using the SalesForce API.

.NOTES

Requires PsIni

> Install-Module PsIni

#>
function Connect-SalesforceAPI {

# --- Arrange
$FileContent = Get-IniContent ".salesforce.conf"
$url = $FileContent['salesforce']['url']
$api_url = "$url/services/data"

# --- Act

$aboutAPI = curl $api_url

# --- Assert

# Write-Output $api_url
# $aboutAPI | Format-List
$basicAPIInfo = $aboutAPI.Content | ConvertFrom-Json
return $basicAPIInfo

# Write-Output $aboutAPI.
}
