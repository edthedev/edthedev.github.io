import pyxel


class App:
    def __init__(self):
        pyxel.init(200, 150, title="Doodle Bug")
        pyxel.mouse(True)

        pyxel.run(self.update, self.draw)

    def update(self):

        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()


    def draw(self):
        x = 50
        y = 50
        pyxel.blt(x, y, 0, 0, 0, 16, 16)

App()
