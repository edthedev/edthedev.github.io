import pyxel
from dataclasses import dataclass


@dataclass
class Pixel:
    x: int
    y: int
    color: int



class App:
    def __init__(self):
        pyxel.init(200, 150, title="Doodle Bug")
        pyxel.mouse(True)
        pyxel.load('doodlebug.pyxres')

        self.bug_x = 100
        self.bug_y = 75
        self.next_color_in = 10
        self.color = 0
        self.pixels = []

        pyxel.run(self.update, self.draw)

    def update(self):

        # Move the bug toward the mouse
        if self.bug_x < pyxel.mouse_x:
            self.bug_x += 1
        else:
            self.bug_x -= 1

        if self.bug_y < pyxel.mouse_y:
            self.bug_y += 1
        else:
            self.bug_y -= 1

        # Rotate drawing color
        self.next_color_in -= 1
        if(self.next_color_in<0):
            self.color+=1
            self.next_color_in = 10
        if(self.color>16):
            self.color=0

        # Memorize what we drew so we can re-draw after each `pyxel.cls(6)`
        p = Pixel(self.bug_x, self.bug_y, self.color)
        self.pixels.append(p)

        # Remove oldest pixel after 500
        if(len(self.pixels)>500):
            self.pixels.pop(0)

    def draw(self):
        pyxel.cls(6)  # Clear the screen to a light grey

        # Print text to tell us where the bug is
        pyxel.text(x=3, y=3, s="Bug is at: " + str(self.bug_x), col=0)
        pyxel.text(x=3, y=13, s="Bug is pooping color: " + str(self.color), col=0)
        pyxel.text(x=120, y=140, s="Press ESC to quit.", col=0)

        # Draw the bug
        pyxel.blt(x=self.bug_x, y=self.bug_y, # draw at bug X,Y
            img=0, # From image bank 0
            u=0, v=0, w=16, h=16, # Choose pixels 0,0 through 16,16
            colkey=0 # Treat color 0 as transparent
            )

        # Draw our pixels in the last 500 places the bug has been
        for item in self.pixels:
            pyxel.pset(x=item.x + 8,  # +8 - to the bug's middle
                   y=item.y + 16,  # +16 - to the bug's butt
                   col=item.color)

App()