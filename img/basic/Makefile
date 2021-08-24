phony: gif

# make gif FILE=colors
gif: 
	x16emu.exe -bas ../../_includes/basic/$(FILE).bas -gif $(FILE).gif

latest.gif: FILE=latest
latest.gif: gif

hearts.gif: FILE=hearts
hearts.gif: gif

colors.gif: FILE=colors
colors.gif: gif

specials.gif: FILE=specials
specials.gif: gif

waves.gif: FILE=waves
waves.gif: gif

all: latest colors specials waves