.PHONY: serve open clean

OUTDIR=C:\src\site

open: serve
	open http://localhost:3001

setup:
	npm install @11ty/eleventy --save-dev	
	npm install @11ty/eleventy-navigation --save-dev	
	npm install --save-dev markdown-it-anchor slugify
	# Did not work. npm install @orchidjs/eleventy-plugin-ids --save-dev


serve:
	# npx @11ty/eleventy --serve
	podman run --rm -v .:/app -p 8080:8080 localhost/website ^C

clean:
	rm C:\src\site -r -fo

deploy_keys:
	ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages 