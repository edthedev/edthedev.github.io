.PHONY: serve open

open: serve
	open http://localhost:3001

serve:
	eleventy --serve --input=_src

# watch:
# 	eleventy --serve --watch --input=_src

setupChrome:
	chrome https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en