.PHONY: serve open clean

OUTDIR=C:\src\site

open: serve
	open http://localhost:3001

setup:
	npm install @11ty/eleventy --save-dev	
	npm install --save eleventy-plugin-toc
	npm install --save markdown-it markdown-it-ancho

serve:
	npx @11ty/eleventy --serve

clean:
	rm C:\src\site -r -fo

deploy_keys:
	ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages 