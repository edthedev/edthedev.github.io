.PHONY: serve open clean

OUTDIR=C:\src\site

open: serve
	open http://localhost:3001

serve:
	eleventy --serve --output=$(OUTDIR)

clean:
	rm C:\src\site -r -fo