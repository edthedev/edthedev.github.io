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

        self.bug_x = 50
        self.bug_y = 50
        self.color = 0

        pyxel.camera()
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
        self.color+=1
        if(self.color>16):
            self.color=0

        p = Pixel(self.bug_x, self.bug_y, self.color)
        self.pixels.append(p)
        if(len(self.pixels)>200):
            self.pixels.pop()

    def draw(self):
        pyxel.cls(6)
        pyxel.text(x=50, y=50, s="Bug is at: " + str(self.bug_x), col=0)
        pyxel.blt(x=self.bug_x, y=self.bug_y, # draw at bug X,Y
            img=0, # From image bank 0
            u=0, v=0, w=16, h=16, # Choose pixels 0,0 through 16,16
            colkey=0 # Treat color 0 as transparent
            )
        for item in self.pixels:
            pyxel.pset(x=item.x + 8, 
                   y=item.y + 8,
                   col=item.color)

App()