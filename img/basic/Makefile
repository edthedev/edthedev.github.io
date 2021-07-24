phony: gif

FILE = latest
latest.gif: gif

FILE = colors
colors.gif: gif

FILE = specials
specials.gif: gif

FILE = waves
waves.gif: gif

all: latest colors specials waves

# make gif FILE=colors
gif: 
	x16emu.exe -bas ../../_includes/basic/$(FILE).bas -gif $(FILE).gif