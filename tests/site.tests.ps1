# Test locally with:
# (Be sure to also update to PowerShell 7)
# As Admin:
# > Install-Module -Name Pester -Force -SkipPublisherCheck
# then not as admin:
# > Invoke-Pester ./tests

Describe 'Site Content Tests' {

    # Arrange & Act
    It 'has an index file' {
      Test-Path -Path ./index.html | Should -Be $true
    }
    $index_content = Get-Content ./index.html

    # Assert
    It 'has the correct page title' {
      $expected_title = "<title>Edward.Delaporte.us</title>"
      '.\index.html' | Should -FileContentMatch $expected_title
    }
    It 'has navigation' {
      '.\index.html' | Should -FileContentMatch 'navbar'
      '.\index.html' | Should -FileContentMatch 'nav.js'
    }

}