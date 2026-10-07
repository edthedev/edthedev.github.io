import pyxel
from dataclasses import dataclass


@dataclass
class Pixel:
    x: int
    y: int
    color: int

QUESTIONS = """1+1=2
Capitol of France=Paris
1+2=3
1+3=4
1+4=5
"""

def split_question(raw):
    return raw.split("=")

class App:
    def __init__(self):
        pyxel.init(200, 150, title="Flash Cards")
        pyxel.mouse(True)
        self.questions = QUESTIONS.split("\n") 
        self.current = 1
        pyxel.run(self.update, self.draw)

    def update(self):
        pass

    def draw(self):
        pyxel.cls(6)  # Clear the screen to a light grey

        # TODO: Print random other answers along with correct answer.
        # TODO: Remove clicked incorrect answers
        # TODO: Celebrate when correct is clicked
        # TODO: Show a new questions after celebration
        q,a = split_question(self.questions[self.current])
        pyxel.text(x=3, y=3, s=q, col=0)
        pyxel.text(x=120, y=140, s="Press ESC to quit.", col=0)

App()