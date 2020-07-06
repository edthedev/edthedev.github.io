Describe 'Site Content Tests' {
    It 'has an index file' {
      Test-Path -Path ./index.html | Should Be $true
    }
    It 'has a penguin file' {
      Test-Path -Path ./penguins_are_cool.html | Should Be $true
    }
}