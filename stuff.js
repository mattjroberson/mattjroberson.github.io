function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    fill(0);
    circle(50, frameCount % windowWidth, 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
