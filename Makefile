open:
	open index.html

openPres:
	open WebCon2016.html

openFish: 
	open fishbowl.html

static:
	jsx -w jsx/ static/

.PHONY: static

setupYarn:
	# wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.rep
	sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
	# yum install nodejs
	yum-config-manager --enable yarn
	yum install yarn

yarnstall:
	yarn add bookmark

setupApache:
	yum install -y httpd24
	sudo service httpd start
	mv /home/ec2-user/edthedev.github.io/* /var/www/html/

setupChrome:
	chrome https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en