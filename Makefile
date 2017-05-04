open:
	open index.html

openPres:
	open WebCon2016.html

openFish: 
	open fishbowl.html

static:
	jsx -w jsx/ static/

.PHONY: static

setupPdf:
	yum install -y xorg-x11-fonts-75dpi
	yum install -y xorg-x11-fonts-Type1
	wget http://download.gna.org/wkhtmltopdf/0.12/0.12.2.1/wkhtmltox-0.12.2.1_linux-centos6-amd64.rpm
	rpm -Uvh wkhtmltox-0.12.2.1_linux-centos6-amd64.rpm

setupYarn:
	# wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.rep
	sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
	# yum install nodejs
	yum-config-manager --enable yarn
	yum install yarn

yarnstall:
	yarn add bookmark

pdf:
	wkhtmltopdf resume.html Resume.Edward.Delaporte.pdf
