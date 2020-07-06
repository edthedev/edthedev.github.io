# For GitHub actions PowerShell
FROM mcr.microsoft.com/powershell:ubuntu-18.04

LABEL "com.github.actions.name"="Pester Tests for Content"
LABEL "com.github.actions.description"="Verify some contents of the site with Pester"
LABEL "com.github.actions.icon"="terminal"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="https://github.com/edthedev/edthedev.github.io"
LABEL "homepage"="https://edward.delaporte.us"
LABEL "maintainer"="Edward Delaporte (@edthedev)"

ADD entrypoint.ps1 /tests.ps1
ENTRYPOINT ["pwsh", "/tests.ps1"]