var dimensionX = 70
var dimensionY = 70

function setup () {
    createCanvas(800,800);

}

function drawCubes () {

    colorMode (HSB, 100);

    for (var i = 0; i < dimensionX; i++) {
        for (var j = 0; j < dimensionY; j++) {

            noStroke ();

            var hue = i*2;
            var saturation = j*2;

            fill(hue, saturation,100);

            var cubeX = i*10;
            var cubeY = j*10;

            rect(cubeX,cubeY,10,10);
        }
    }
}

function draw () {
    drawCubes ();
}

