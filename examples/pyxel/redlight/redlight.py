
import pyxel
from dataclasses import dataclass


@dataclass
class Pixel:
    x: int
    y: int
    color: int



class App:
    def __init__(self):
        pyxel.init(200, 150, title="Red Light, Green Light")
        pyxel.mouse(True)
        pyxel.load('redlight.pyxres')

        self.runner_x = 0
        self.runner_y = 75
        self.runner_dy = 0

        pyxel.run(self.update, self.draw)

    def update(self):
        self.update_runner()

    def update_runner(self):
        if pyxel.btn(pyxel.KEY_LEFT) or pyxel.btn(pyxel.GAMEPAD1_BUTTON_DPAD_LEFT):
            self.runner_x = max(self.runner_x - 2, 0)
        if pyxel.btn(pyxel.KEY_RIGHT) or pyxel.btn(pyxel.GAMEPAD1_BUTTON_DPAD_RIGHT):
            self.runner_x = min(self.runner_x + 2, pyxel.width - 16)
        self.runner_y += self.runner_dy
        self.runner_dy = min(self.runner_dy + 1, 8)

    def draw(self):
        pyxel.cls(6)  # Clear the screen to a light grey
        pyxel.blt(0, 88, 0, 0, 88, 160, 32)
        pyxel.blt(0, 88, 0, 0, 64, 160, 24, 12)

        # Print text to tell us where the runner is
        pyxel.text(x=3, y=3, s="runner is at: " + str(self.runner_x), col=0)
        pyxel.text(x=120, y=140, s="Press ESC to quit.", col=0)

        # Draw the runner
        pyxel.blt(x=self.runner_x, y=self.runner_y, # draw at runner X,Y
            img=0, # From image bank 0
            u=0, v=0, w=16, h=16, # Choose pixels 0,0 through 16,16
            colkey=0 # Treat color 0 as transparent
            )

App()