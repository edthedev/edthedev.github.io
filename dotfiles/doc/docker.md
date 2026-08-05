Some Docker examples:

```powershell
function Start-Vault() {
  consul agent -dev # Run in Dev Mode
  vault sever -config c:\src\dotfiles\vaultconfig.hcl -address=http://127.0.0.1:8200 # Use local dev Consul as storage
}

function New-DockerRStudio() {
  docker run --name=rpython -Pit -p 8888:8888 -p 8787:8787 -p 8022:22 -p 6006:6006 -v c:\src\data:/mnt/data datascienceschool/rpython
}
function Start-DockerRStudio() {
  docker start rpython
  jupyter notebook list
  Write-Host "R Studio is running at http://localhost:8787/"
  Write-Host "Jupyter is running at http://localhost:8888/"
}

function Start-DockerOWASPZap() {
  Param(
    [string]$URL
  )
  # https://github.com/zaproxy/zaproxy/wiki/Docker
  docker run owasp/zap2docker-stable
  docker run -i owasp/zap2docker-stable zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' $URL
  Write-Host "https://github.com/zaproxy/zaproxy/wiki/Docker"
}

function Start-DockerWebGoat() {
  docker pull webgoat/webgoat-8.0 
  docker run -p 8080:8080 -t webgoat/webgoat-8.0
  Write-Host "Vulnerable Webgoat running on 8080"
}

function Start-DockerJuiceShop() {
  docker pull bkimminich/juice-shop
  docker run --rm -p 3000:3000 bkimminich/juice-shop
  Write-Host "Vulnerable Juice Shop running on 3000"
}

function Start-DockerGrafana() {
  docker run --rm -d --name=grafana -p 3001:3001 -user $ID --volume "C:\src\data:/var/lib/grafana" grafana/grafana
  Write-Host "Grafana running on 3001"
}

function Start-DockerPython3Bash {
  docker run -it python /bin/bash
}

function Start-DockerPython2Bash {
  docker run -it python:2-buster /bin/bash
}

function Stop-Docker {
  docker stop $(docker ps -a -q)
}

function New-DockerAirflow {
  docker run -v ./:/etc/myscripts apache/airflow /bin/bash /etc/myscripts/airflow.sh

}

function Start-DockerAirflow {
  docker run airflow -f webserver
}

function Start-DockerFindSecrets {
  # docker run -v "$((Get-Item .).FullName)":/etc/src dxa4481/trufflehog /bin/bash
  # Write-Host "Current folder mounted as /etc/src"
  docker run -v /c/src:/etc/src dxa4481/trufflehog /etc/src/SecOps-Tools
}

```
