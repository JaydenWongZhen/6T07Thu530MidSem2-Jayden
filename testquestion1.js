function setup() {
    createCanvas(600,400);
    background(255);
    world.gravity = 10;
}
function draw() {
    background(255);
    if (mouse.presses()) {
        ball = new Sprite(mousex,mousey,20);
    }    
}