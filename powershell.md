
## PowerShell Examples

PowerShell is my favorite shell environment. I'll never consider using crusty old disgusting `bash`, `zsh`, or `csh` again. In comparison, they are terrible. PowerShell 6 is open source and runs everywhere. There's no reasonable exscuse for any professional to be using anything else as their primary shell, today.

Holy war inducing comments out of the way, here's some scripts I wrote that include some surprisingly re-usable patterns.
If you're reading this, I probably am standing behind you and asked you to Google for this page because I could not remember my own favorite command syntax. Hi, future me! Glad this page is helping you and your friend!

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
