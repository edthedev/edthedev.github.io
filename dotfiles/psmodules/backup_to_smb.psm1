function Backup-ToSMB {
    param (
        $Path,
		$SMBPath,
		[PSCredential] $Credential,
		$DriveLetter = 'N'
    )
	New-PSDrive -Name $DriveLetter -PSProvider FileSystem -Root $SMBPath -Credential $Credential
	robocopy $Path $SMBPath

}
Export-ModuleMember -Function Backup-ToSMB