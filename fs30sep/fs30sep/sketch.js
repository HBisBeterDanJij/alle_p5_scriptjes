let xx = 481
let yy = 500

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(220);

    circle(xx, 200, yy);

    textSize(300);
    text("😀", xx - 200, yy + 100);
    textSize(200);
    text("😀", xx - 400, yy + 50);
    text("😀", xx + 150, yy + 50);
    textSize(100);
    text("😀", xx - 500, yy + 50);
    text("😀", xx + 400, yy + 50);

    yy += 5
}
