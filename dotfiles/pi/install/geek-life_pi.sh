
if [ ! -f /usr/bin/geek-life ]; then
	wget https://github.com/ajaxray/geek-life/releases/download/v0.1.1/geek-life_linux-arm64 -O /usr/bin/geek-life
	chmod uo+x /usr/bin/geek-life
fi
