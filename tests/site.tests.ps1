# Test locally with:
# (Be sure to also update to PowerShell 7)
# As Admin:
# > Install-Module -Name Pester -Force -SkipPublisherCheck
# then not as admin:
# > Invoke-Pester ./tests

Describe 'Site Content Tests' {
    It 'has an index file' {
      Test-Path -Path ./index.html | Should -Be $true
    }
    It 'has no penguin file' {
      Test-Path -Path ./penguins_are_cool.html | Should -Be $false
    }
    $index_content = Get-Content ./index.html

    It 'has the correct page title' {
      $expected_title = "<title>Edward.Delaporte.us</title>"
      '.\index.html' | Should -FileContentMatch $expected_title
    }

}