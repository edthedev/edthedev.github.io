$env:todolist = $env:journal
$ENV:todotxt = Join-Path $env:todolist "todo.txt"
$ENV:todohist = Join-Path $env:todolist "todo.hist.csv"
# Tell my scripts which GitHub repositories to look in.
$env:GITHUB_USERNAME = 'edthedev'
$env:GITHUB_CLONE_PATH = Join-Path $env:USERPROFILE 'src'
$env:GITHUB_REPOS = @(

	'techservicesillinois/SecOps-Powershell-Axonius',
	'techservicesillinois/SecOps-PowerShell-AzureRunbooks',
	'techservicesillinois/secops-honeypot-serversetup',
	'techservicesillinois/SecOps-Qualys-CDBSync',
	'techservicesillinois/SecOps-Powershell-Qualys',
	'techservicesillinois/SecOps-Powershell-TDXTickets',
	'techservicesillinois/SecOps-Powershell-Splunk',
	'techservicesillinois/SecOps-Powershell-Feroot',
	'techservicesillinois/SecOps-PowerShell-CDB',
	'techservicesillinois/secops-aws-qualysrss',
	'techservicesillinois/SecOps-PowerShell-DMI',
	'techservicesillinois/SecOps-Tools', 
	'techservicesillinois/secdev-job-aids', 
	'techservicesillinois/awscli-login', 
	'techservicesillinois/farmit',
	'techservicesillinois/SecOps-Powershell-CSOC',
	'techservicesillinois/SecOps-Powershell-CISDSC',
	'techservicesillinois/SecOps-PowerShell-CISDSCTemplates',
	'techservicesillinois/splunk-soar-template',
	'techservicesillinois/secops-soar-tdx',
	'techservicesillinois/secops-splunk-null-router',
	'techservicesillinois/secops-splunk-illinois-midpoint',
	'techservicesillinois/soar-clearpass',
	'techservicesillinois/phantom-toolbox'
) -join ' '
# 'uillinois-community/uillinois-community.github.io',
$ENV:TS_REPOS = $ENV:GITHUB_REPOS.split(' ') | Where { $_ -like 'techser*' }
$env:GITHUB_FOCUS_REPOS = @(
	'techservicesillinois/SecOps-Tools', 
	'techservicesillinois/secdev-job-aids', 
	'techservicesillinois/awscli-login', 
	'techservicesillinois/SecOps-Powershell-CSOC',
	'techservicesillinois/SecOps-Powershell-CISDSC',
	'techservicesillinois/SecOps-PowerShell-CISDSCTemplates',
	'techservicesillinois/splunk-soar-template',
	'techservicesillinois/secops-soar-tdx',
	'techservicesillinois/secops-splunk-illinois-midpoint',
	'techservicesillinois/soar-clearpass',
	'techservicesillinois/phantom-toolbox'

) -join ' '
