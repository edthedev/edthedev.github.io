import pyxel


class App:
    def __init__(self):
        pyxel.init(200, 150, title="Doodle Bug")
        pyxel.mouse(True)

        self.bug_x = 50;
        self.bug_y = 50;

        pyxel.run(self.update, self.draw)

    def update(self):

        if self.bug_x < pyxel.mouse_x:
            self.bug_x += 1;
        else:
            self.bug_x -= 1;

        if self.bug_y < pyxel.mouse_y:
            self.bug_y += 1;
        else:
            self.bug_y -= 1;

        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()


    def draw(self):
        pyxel.cls(0)
        self.bug_x = 50
        self.bug_y = 50
        pyxel.text(x=50, y=50, 
        s="Bug is at: " + str(self.bug_x), col=1)
        pyxel.blt(x=self.bug_x, y=self.bug_y, # draw at bug X,Y
            img=0, # From image bank 0
            u=0, v=0, w=8, h=8 # Choose pixels 0,0 through 16,16
            )

App()
