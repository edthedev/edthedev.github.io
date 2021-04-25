.PHONY: serve open

OUTDIR=C:\src\site

open: serve
	open http://localhost:3001

serve:
	eleventy --serve --output=$(OUTDIR)

clean:
	rm "$(OUTDIR)" -r -fo

# watch:
# 	eleventy --serve --watch --input=_src

setupChrome:
	chrome https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en