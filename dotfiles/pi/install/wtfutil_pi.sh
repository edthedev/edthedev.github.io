
if [ ! -f /usr/bin/wtfutil ]; then
	cd /tmp
	wget https://github.com/wtfutil/wtf/releases/download/v0.35.0/wtf_0.35.0_linux_armv6.tar.gz
  tar -xzf /wtf_0.35.0_linux_armv6.tar.gz
	mv ./wtfutil /usr/bin/wtfutil
fi
