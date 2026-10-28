let x = 0;
let y = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    for (let i = 0; i < 1000; i += 1) {
        fill(random(255), random(255), random(255));
        circle(random(0, 800), random(0, 600), random(5, 40));
    }
}