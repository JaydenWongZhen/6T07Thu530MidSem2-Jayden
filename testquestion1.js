function setup() {
    createCanvas(600,400);
    background(255);
    if (mouse.presses()) {
        ball = new Sprite(mousex,mousey,20);
    }        
    ball.vel.y = 2;
}
function draw() {
    background(255);

}