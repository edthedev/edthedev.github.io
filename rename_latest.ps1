<#
.SUMMARY

Promote latest art project to a named set of files.

#>
param(
    [string]$name
)

Copy-Item /img/art/latest.PNG /img/art/$name.PNG
Copy-Item /img/art/latest2.PNG /img/art/$name2.PNG
Copy-Item /js/art/latest.js /js/art/$name.js
Copy-Item /art/live/latest.md /art/live/$name.md