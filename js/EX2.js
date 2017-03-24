var dimensionX = 70
var dimensionY = 70

function setup () {
    createCanvas(800,800);

}

function drawCubes(xPos,yPos) {

    background(255);

    colorMode(HSB,70);

    for (var i = 0; i < dimensionX; i++) {
        for (var j = 0; j < dimensionY; j++) {

            noStroke();

            var hue = i*2.5;
            var saturation = j*5;

            var cubeX = i*20 +5;
            var cubeY = j*20 +5;

            var x2 = xPos;
            var y2 = yPos;

            var d = int(dist(cubeX, cubeY, x2, y2));

            fill(d/10,saturation,0);
            ellipse(cubeX, cubeY, d/10, d/10);

        }
    }
}

function draw() {
    drawCubes (mouseX, mouseY);

}