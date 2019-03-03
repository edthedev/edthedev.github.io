

```powershell
<#
Given a couple of .csv files where each has at least one column named "Address",
this script will launch Opera to the Google maps between the specified locations.
I use it when house shopping.

#>
$addressList = Get-Content ./Addresses.csv | ConvertFrom-Csv
$locations = Get-Content ./LocationsOfInterest.csv | ConvertFrom-Csv

$opera = "C:\Users\edthe\AppData\Local\Programs\Opera\launcher.exe"

# $addressList | ForEach-Object {
$addressList | Select-Object -First 20 | ForEach-Object {
    $addy = $_
    $src = $_.Address -Replace " ", "+"
        $locations | ForEach-Object { 
            $dst = $_.Address -Replace " ", "+"
            $mapURL = "https://www.google.com/maps/dir/$src/$dst"
            Invoke-Expression "$opera $mapURL"
        }
}

```
