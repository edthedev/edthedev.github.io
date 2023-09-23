<#
.SUMMARY

Pull an art piece into latest...

#>
param(
    [string]$name
)

Copy-Item ./js/art/$name.js ./js/art/latest.js 
Copy-Item ./art/live/$name.md ./art/live/latest.md 