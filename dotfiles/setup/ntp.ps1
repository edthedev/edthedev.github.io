w32tm /query /status

net stop w32time
w32tm /config /syncfromflags:manual /manualpeerlist:"ntp.illinois.edu 0.it.pool.ntp.org 1.it.pool.ntp.org 2.it.pool.ntp.org 3.it.pool.ntp.org"
net start w32time
w32tm /config /update
w32tm /resync /rediscover

w32tm /query /status
