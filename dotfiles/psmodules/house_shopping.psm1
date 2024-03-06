
function Add-Addresses(){
    Param(
        [string]$addressFile = "Addresses.csv",
        [string]$outFile= "Address_Details.csv"
    )
    Copy-Item $outFile "$outFile.backup"
    $addressList = Get-Content $addressFile | ConvertFrom-Csv
    $details = Get-Content $outFile| ConvertFrom-Csv

    $results = [System.Collections.ArrayList]@()
    $known = [System.Collections.ArrayList]@()

    $details | ForEach-Object {
        $idx = $results.Add($_)
        $known.Add($_.Address)
    }
    $addressList | ForEach-Object {
        if($known -NotContains $_.Address)
        {
            $idx = $results.Add($_)
            $idx = Write-Host "Aadded " + $_.Address
        }
    }
    $results | Format-Table
    $answer = Read-Host -Prompt "Write updated file? y/N"
    if($answer -Eq "y") {
        $results | Export-Csv -NoTypeInformation -Path $outFile
        Write-Host "Updated $outFile"
    }
}


function Add-AddressLocations(){
    Param(
        [string]$outFile= "Address_Details.csv"
    )
    Copy-Item $outFile "$outFile.backup"
    $details = Get-Content $outFile| ConvertFrom-Csv

    $results = [System.Collections.ArrayList]@()

    $details | ForEach-Object {
        $updated = $_
        if($_.lat -Eq $null)
        {
            Write-Host "Looking up position of " $_.Address
            $coords= Get-MapCoords -Address $_.Address
            $coords | Format-List
            $updated.lat = $coords.lat
            $updated.lon = $coords.lon
            $updated | Format-List
        }
        $idx = $results.Add($updated)
    }
    $results | Select-Object Address, lat, lon | Format-List
    $answer = Read-Host -Prompt "Write updated file? y/N"
    if($answer -Eq "y") {
        $results | Export-Csv -NoTypeInformation -Path $outFile
        Write-Host "Updated $outFile"
    }
}


function Add-TravelTimes() {
    Param(
        [string]$outFile= "Address_Details.csv"
    )
    $details = Get-Content $outFile| ConvertFrom-Csv

}

$fuzzyUrl = "https://atlas.microsoft.com/search/fuzzy/json?&api-version=1.0&subscription-key={Your-Azure-Maps-Subscription-key}&language=en-US&query=pizza"

function Invoke-SubKeyCheck {
    if($env:AzMapsSubKey -Eq $null) {
        Write-Error "Please set env:AzMapsSubKey"
        Exit
    }
}

function Get-MapAddress() {
    param(
        [string]$address
    )
    Invoke-SubKeyCheck
    $subKey = $env:AzMapsSubKey
    $addyUrl = "https://atlas.microsoft.com/search/address/json?&subscription-key=$subKey&api-version=1.0&language=en-US&query=$address"
    $result = Invoke-WebRequest $addyUrl
    if($result.StatusCode -Eq 200){
        return $result.Content | ConvertFrom-Json
    }
    return $result.StatusDescription
}

function Get-MapCoords() {
    param(
        [string]$address
    )
    Invoke-SubKeyCheck
    $subKey = $env:AzMapsSubKey
    $result = Get-MapAddress -Address $address
    return $result.results.entryPoints[0].position
}

function Get-MapTravelPlan() {
    param(
        [string]$from_address,
        [string]$to_address
    )
    Invoke-SubKeyCheck
    $subKey = $env:AzMapsSubKey
    $pos1 = Get-MapCoords -Address $from_address
    $lat1 = $pos1.lat
    $lon1 = $pos1.lon

    $pos2 = Get-MapCoords -Address $to_address
    $lat2 = $pos2.lat
    $lon2 = $pos2.lon

    $query = "$lat1,$($lon1):$lat2,$lon2"
    # Write-Host $query
    $travelUrl = "https://atlas.microsoft.com/route/directions/json?subscription-key=$subKey&api-version=1.0&query=$query&travelMode=car&traffic=true&departAt=2025-03-29T08:00:20&computeTravelTimeFor=all"
    $result = Invoke-WebRequest $travelUrl
    if($result.StatusCode -Eq 200){
        $content = $result.Content | ConvertFrom-Json
        if($content.formatVersion -Ne "0.0.12"){
            Write-Warning "BEWARE Format has updated! BEWARE"
        }
        return $content.routes
    }
    return $result.StatusDescription
}


function Get-MapTravelMinutes() {
    param(
        [string]$from_address,
        [string]$to_address
    )
    $routes = Get-MapTravelPlan -from_address $from_address -to_address $to_address
    $seconds = $routes.summary.travelTimeInSeconds
    return $seconds/60
}