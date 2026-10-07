function Get-GitLog() {
	git log --oneline
}

function Get-GitStatus() {
	git status -b --short
}
