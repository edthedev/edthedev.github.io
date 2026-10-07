




## Wifi fix from Reddit

https://www.reddit.com/r/SurfaceLinux/comments/9t53gq/wifi_fixed_on_surface_go_ubuntu_1810/

I wanted to share this since it seems like a common problem on the Surface Go and there isn't a step-by-step guide out there to fix it. A lot of thanks goes out to the community, especially u/jamesdutc for his post Surface Go: First Impressions. I also recommend anyone new to the Terminal to visit Linuxconfig.org - a resource that helped me greatly.

How I got WiFi Working

Step 1) Download the board.bin file from here: http://www.killernetworking.com/support/K1535_Debian/board.bin - I saved the file to Downloads -

Step 2) Open the Terminal

Step 3) Remove the current board.bin file from directory hw2.1:

sudo rm /lib/firmware/ath10k/QCA6174/hw2.1/board.bin

Step 4) Copy the board.bin file from Downloads to hw2.1*

sudo cp ~/Downloads/board.bin /lib/firmware/ath10k/QCA6174/hw2.1

Step 5) Remove the current board.bin file from directory hw3.0

sudo rm /lib/firmware/ath10k/QCA6174/hw3.0/board.bin

Step 6) Copy the board.bin file from Downloads to hw3.0*

sudo cp ~/Downloads/board.bin /lib/firmware/ath10k/QCA6174/hw3.0

Step 7) Restart

And that's it! After going through this process my WiFi now works. Hopefully, others out there who are like me and unfamiliar with the Terminal will find this helpful.

