function Add-ToProfile {
    param (
        $Path
    )
	$profileContents = [string]::join([environment]::newline, (get-content -path $Path))
	invoke-expression $profileContents
}
Export-ModuleMember -Function Add-ToProfile