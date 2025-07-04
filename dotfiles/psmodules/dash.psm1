function Get-JournalAgenda() {
    agenda.exe -path "$HOME/Journal/{YYYY}/{MM}-{DD}.md"
}

function Measure-JournalTodos() {
	$todocount = todolist | Measure-Object -Line
	if(Test-Path $env:todohist) {
		$env:todocount = Get-Content -Path $env:todohist
	}
	$env:todocount += '|'
	$env:todocount += $todocount.lines
	$env:todocount | Out-File -Path $env:todohist
}


<#

.EXAMPLE

Show-GitRevList -From 2023.01.01

#>
function Show-GitRevList() {
	param(
		[string]$from
	)
	Invoke-AgileCmd "git rev-list HEAD --count --since=$from"
}

Export-ModuleMember -Function Show-GitRevList



<#

.SYNOPSIS

Show a text dashboard.

.EXAMPLE

Include `Todo` list.
Show-MyDashboard -todo

#>
function Show-MyDashBoard() {
	param(
		# [switch]$todocount=$true,
		# [switch]$agenda,
		[switch]$blocked,
		[switch]$bugs,
		[switch]$gitHub,
		[switch]$help,
		[switch]$leeroy,
		[switch]$orphans,
		[switch]$pr,
		[switch]$requested,
		[switch]$todo
	)
	$todocount = $true
	if($todocount){
		Measure-JournalTodos
		Write-Host ""
		Write-Host "## Todo items for today: $env:todocount" 
		chart -var todocount
	}
	$agenda = $true
	if($agenda){
		Write-Host ""
		Write-Host "## Agenda for today:"
		Get-JournalAgenda
	}
	if($blocked){
		Write-Host ""
		Write-Host "## Blocked & Blocker Issues:"
		$blockerQuery = "label:blocker,blight,bug,blocked"
		Invoke-AgileCmd "gh issue list -S '$blockerQuery'"
		Write-Host ""
		Write-Host "## Open Questions"
		$questionQuery = 'label:"phone a friend",question,"needs context"'
		Invoke-AgileCmd "gh issue list -S '$questionQuery'"

	}
	if($bugs) {
		Write-Host ""
		Write-Host "## Known Bugs"
		Invoke-AgileCmd "gh issue list -S 'label:bug'"
	}
	if($github) {
		Write-Host ""
		Write-Host "## GitHub Status (gh status)"
		Invoke-Expression "gh status"
	}
	if($help) {
		Write-Host "## Dasbhoard Help"
		Get-Help Show-MyDashboard
	}
	if($leeroy){
		Write-Host ""
		Write-Host "## Leeroy Jenkins!:"
		Invoke-AgileCmd "gh issue list -l 'leeroy jenkins'"
	}
	if($orphans) {
		Write-Host ""
		Write-Host "## Issues with No Milestone" 
		Invoke-AgileCmd "gh issue list -S 'is:open is:issue no:milestone'"
	}
	if($pr) {
		Write-Host ""
		Write-Host "## Open Pull Requests"
		Invoke-AgileCmd "gh pr list"
	}
	if($requested){
		Write-Host ""
		Write-Host "## Open Stakeholder Requests"
		invoke-agilecmd "gh issue list -S 'label:requested'"
	}
	if($todo) {
		Write-Host ""
		Write-Host "## Journal Todo Items" 
		todolist
		Write-Host ""
		Write-Host "## Todo.txt File" 
		todotxt
	}
}

function Write-AgileClosedData() {
	$gh_cmd = 'gh issue list --state closed --json title,closedAt,milestone,url'
	Write-AgileToFile -gh_command $gh_cmd
}

Export-ModuleMember -Function Write-AgileClosedData
Export-ModuleMember -Function Show-MyDashboard
Export-ModuleMember -Function Show-MyTeamWork