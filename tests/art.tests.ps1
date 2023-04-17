# Test locally with:
# (Be sure to also update to PowerShell 7)
# As Admin:
# > Install-Module -Name Pester -Force -SkipPublisherCheck
# then not as admin:
# > Invoke-Pester ./tests

Describe 'Test Site was generated'  {
    It 'generated the _site directory' {
      Test-Path -Path './_site' | Should -Be $true
    }
}
Describe 'Live art has an index'  {
    It 'has an index file' {
      Test-Path -Path './_site/art/live/index.html' | Should -Be $true
    }
}
Describe 'Test Live Art JS for Errors' {

    # Assert
    It 'has JavaScript links' {
      './_site/art/live/candle/index.html' | Should -FileContentMatch '/js/art/candles.js'
    }
    It 'has JavaScript links' {
      './_site/art/live/dots_and_boxes/index.html' | Should -FileContentMatch '/js/art/dots_and_boxes.js'
    }

}
