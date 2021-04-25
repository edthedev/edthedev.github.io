.PHONY: serve open

SITEDIR=c:\src\site

open: serve
	open http://localhost:3001

serve:
	eleventy --serve --output=$(SITEDIR)

publish:
	cd $(SITEDIR); git commit -am "Updated."; git push -u origin gh_pages


# watch:
# 	eleventy --serve --watch --input=_src

setupChrome:
	chrome https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en