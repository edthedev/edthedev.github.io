

## Markdown to HTML

The usual VSCode plugins add a lot of weird junk (telemetry, perhaps), so I decided to start using brute force and minimal `GoLang` code to convert my Markdown into HTML.

### Setup

```powershell
go install github.com/gomarkdown/mdtohtml@latest
mdtohtml -h
```

### Generate document

```powershell
mdtohtml.exe -css https://edward.delaporte.us/css/edthedev.css .\Dashboard.md > Dashboard.html
```

VSCode Settings:
```json
"command-runner.terminal.name": "runCommand",
"command-runner.terminal.autoClear": true,
"command-runner.terminal.autoFocus": true,
"command-runner.commands": {
    "markdown to HTML": "mdtohtml.exe -css https://edward.delaporte.us/css/edthedev.css ${file} > ${file}.html",
	"HTML to PDF": "wkhtmltopdf.exe ${file}.html ${file}.pdf",
},
```

Then `Ctrl+Shift+P`, `Run Command` and select `markdown to HTML`.

## Markdown to PDF

### Setup

Install [wkhtml2pdf.exe](https://wkhtmltopdf.org/) somewhere on my path. 

### Use

```powershell
wkhtmltopdf.exe .\Dashboard.md.html dash.pdf
```
