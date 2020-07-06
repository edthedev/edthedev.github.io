Describe 'Site Content Tests' {
    It 'has an index file' {
      Test-Path -Path ./index.html
    }
}