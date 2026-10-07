<#
.SYNPOSIS

Spin up a quick Python docker container.

#>
function Invoke-DockerPython{
  Invoke-Docker python
}


# function Export-VSCodeExtensions {
#  code --list-extensions | Out-File -FilePath /src/dotfiles/vscode-extensions.txt
#  Get-Content -Path /src/dotfiles/vscode-extensions.txt
#}

function Invoke-DockerData{
  # docker run -i -t -v c:\data:/data:z civisanalytics/datascience-python:latest /bin/bash
  docker run -it --rm -p 10000:8888 -v c:\data:/home/jovyan/work:z jupyter/datascience-notebook
}

function Invoke-DockerKali{
  Invoke-Docker kalilinux/kali-rolling
}

function Invoke-Docker {
  param(
    [string]$version = 'kalilinux/kali-rolling',
    [string]$cmd = 'bash'
  )
  docker run -it -v c:\data:/data $version $cmd
}

function Invoke-DockerOWASPJuiceShop {
  Get-NetIPAddress | Select-Object IPAddress
  docker run --rm -p 3000:3000 bkimminich/juice-shop
}

function Invoke-DockerHyrda {
  docker run -it --entrypoint=/bin/bash -v c:\data:/data vanhauser/hydra
}

Export-ModuleMember -Function Invoke-Docker
Export-ModuleMember -Function Invoke-DockerData
Export-ModuleMember -Function Invoke-DockerKali
Export-ModuleMember -Function Invoke-DockerPython
Export-ModuleMember -Function Invoke-DockerOWASPJuiceShop