Get-ChildItem img/mix/top | ForEach-Object { $_.PsChildName } | ConvertTo-Json > data/mix_top.json
Get-ChildItem img/mix/bottom | ForEach-Object { $_.PsChildName } | ConvertTo-Json > data/mix_bottom.json


$all_alt = Get-Content ./data/mix_alt.json | ConvertFrom-Json -AsHashTable

# ALT text stubs for top images
$names = Get-ChildItem img/mix/top | ForEach-Object { $_.PsChildName }
$names | Sort-Object | ForEach {
    if(-Not($all_alt.keys -Contains $_)) {
        Write-Host "Add $_"
        $all_alt[$_] = ""
    }
}

# ALT text stubs for bottom images
$names = Get-ChildItem img/mix/bottom | ForEach-Object { $_.PsChildName }
$names | Sort-Object | ForEach {
    if(-Not($all_alt.keys -Contains $_)) {
        Write-Host "Add $_"
        $all_alt[$_] = ""
    }
}

Write-Output $all_alt
$all_alt | ConvertTo-Json > ./data/mix_alt.json