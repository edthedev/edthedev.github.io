var wood_grain_colors;

function setup_grain() {
    wood_grain_colors = [
        get_wood_brown(),
        get_wood_brown(),
        get_wood_brown(),
        get_wood_brown(),
        get_wood_brown()
    ];

}

function get_wood_brown() {
    basegc = random(50,90);
    return color(
        basegc + random(30,70), 
        basegc + random(0,10), 
        basegc + random(0,10)); //random brown
}

function draw_grain(grainx, grainy, grainw, graint) {
    noStroke();

    dx = 1;
    dy = 1;
    dt = 30;
    dw = 3;
    if(grainw > graint) { // set grain direction
        temp = dw;
        dw = dt;
        dt = temp;
    } 

    for(bobx=0; bobx < grainw; bobx+=dw-2) {
        bobx += random(0,2);
        for(boby=0; boby < graint; boby+=dt-2) {
            boby += random(0,2);

            grainc = choose(wood_grain_colors);
            fill(grainc);

            rect(grainx+bobx, grainy+boby, dw, dt);
        }
    }
}

function draw_wood_frame(maxim) {
    rect(0, 0, maxim/8, maxim); // left
    draw_grain(0, 0, maxim/8, maxim); // left
    rect(7*maxim/8, 0, maxim/8, maxim); // right
    draw_grain(7*maxim/8, 0, maxim/8, maxim); // right
    rect(0, 7*maxim/8, maxim, maxim/8); // bottom
    draw_grain(0, 7*maxim/8, maxim, maxim/8); // bottom
    rect(0, 0, maxim, maxim/8); // top
    draw_grain(0, 0, maxim, maxim/8); // top
}