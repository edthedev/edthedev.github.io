Get-ChildItem img/mix/top | ForEach-Object { $_.PsChildName } | ConvertTo-Json > data/mix_top.json
Get-ChildItem img/mix/bottom | ForEach-Object { $_.PsChildName } | ConvertTo-Json > data/mix_bottom.json


$names = Get-ChildItem img/mix/top | ForEach-Object { $_.PsChildName }
$all_alt = Get-Content ./data/mix_alt.json | ConvertFrom-Json -AsHashTable

$names | Sort-Object | ForEach {
        Write-Host $_
    if(-Not $all_alt.keys -contains $_ ) {
        $all_alt[$_] = "TODO: Add alt text"
    }
}

Write-Output $all_alt
$all_alt | ConvertTo-Json > ./data/mix_alt.json