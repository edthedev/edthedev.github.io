.PHONY: serve open

open: serve
	open http://localhost:3001

setup:
	npm install @11ty/eleventy --save-dev	
	npm install @11ty/eleventy-navigation --save-dev	

serve:
	npx @11ty/eleventy --serve

deploy_keys:
	ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages 