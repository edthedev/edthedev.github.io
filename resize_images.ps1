
$source = "./img_in"
$dest = "./img_in/resized"
$exclude = @("*resized*")

$photos = Get-ChildItem $source -Exclude $exclude -Recurse

mkdir -p $destination

foreach ( $photo in $photos ) {
    Resize-Image -InputFile $photo.FullName -Scale 30 -OutputFile (Join-Path $dest $photo.Name) -Verbose
}