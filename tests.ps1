Write-Host "The commit sha was: $env:GITHUB_SHA"

if ($args) {
    Write-Host "Your first argument was: $($args[0])"
} else {
    Write-Host "You supplied no arguments"
}