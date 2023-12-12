<#
.SUMMARY

Promote latest art project to a named set of files.

#>
param(
    [string]$name
)

Copy-Item ./img/art/latest.png./img/art/$name.PNG
Copy-Item ./img/art/latest2.png /img/art/$($name)2.PNG
Copy-Item ./js/art/latest.js ./js/art/$name.js
Copy-Item ./art/live/latest.md ./art/live/$name.md
(Get-Content ./art/live/$name.md) -replace 'latest', $name | Set-Content ./art/live/$name.md