
## Use


Call `Add-Addresses` to copy records from `Addresses.csv` to `Address_Ddetails.csv`.

Call `Add-AddressLocations` to fetch latitude and longitude for all addresses in `Address_Details.csv`.

## Reference

- [Azure Maps](https://learn.microsoft.com/en-us/powershell/module/az.maps/?view=azps-10.4.1&viewFallbackFrom=azps-10.0.0)
- https://learn.microsoft.com/en-us/azure/azure-maps/how-to-search-for-address


https://geekeefy.wordpress.com/2016/05/17/powershell-module-for-google-map/

## Setup

Make sure that PowerShell 7 or higher is installed:

```powershell
if($PSVersionTable.PSVersion.Major < 7) {
    winget install --id Microsoft.Powershell --source winget
}

Then inside PowerShell 7, install the Az module:

```powershell
Install-Module -Name Az -Repository PSGallery -Force
```

### Subscription Key



Set your subscription key:
```powershell
$env:AzMapsSubKey="<your key here>"
```