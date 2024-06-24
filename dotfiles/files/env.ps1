$env:Journal = "~\Journal" # allows cd $env:journal
$env:todolist = "C:\Users\delaport\Journal\"
$ENV:todotxt = "$ENV:todolist\todo.txt"
$ENV:todohist = "$ENV:todolist\todo.hist.csv"
# Tell my scripts which GitHub repositories to look in.
$env:GITHUB_USERNAME = 'edthedev'
$env:GITHUB_CLONE_PATH = '~\src'
$env:GITHUB_REPOS = @(
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

