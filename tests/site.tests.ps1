# Test locally with:
# (Be sure to also update to PowerShell 7)
# As Admin:
# > Install-Module -Name Pester -Force -SkipPublisherCheck
# then not as admin:
# > Invoke-Pester ./tests

Describe 'Site Content Tests' {

    # Arrange & Act
    It 'generated the _site directory' {
      Test-Path -Path ./_site | Should -Be $true
    }
    It 'has an index file' {
      Test-Path -Path ./_site/index.html | Should -Be $true
    }
    $index_content = Get-Content ./_site/index.html

    # Assert
    It 'has the correct page title' {
      $expected_title = "<title>Welcome - Edward Delaporte"
      '.\_site\index.html' | Should -FileContentMatch $expected_title
    }
    It 'has navigation' {
      '.\_site\index.html' | Should -FileContentMatch '/slides'
      '.\_site\index.html' | Should -FileContentMatch '/resume'
    }

}
