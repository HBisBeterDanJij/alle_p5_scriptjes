let size = 100;
let size_up = 1;
let col = [20, 150, 120];
let speed = 1
let cubes = 0
let cubeY = 700
let cubeX = 700


function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(col);

    fill(255, 180, 0);
    strokeWeight(30);
    stroke(250, 140, 0);
    circle(400, 400, size);


    size += size_up * speed;

    if (size > 400) {
        size_up = -1;
    }
    if (size < 100) {
        size_up = 1;
    }

    col =[size, size / 2, size - 10]

    if (speed == 10) {
        speed = int(random(1, 30));
    }

    if (speed > 30) {
        getCubes();
        speed = 0;
    }


    for (let amount = 0; amount < cubes; amount++) {
        square(cubeX - amount * 100, cubeY, 50);
    }

    noStroke();
    fill(0);
    textSize(20);
    text("Click to increase speed", 10, 30);
    text("Speed: " + speed, 10, 60);
    text("at 10 speed, it will randomly change", 10, 90);
    text("get 30 speed to get a cube", 10, 120)
    text(cubes, 400 , 30)
}

function mousePressed() {
    speed += 1; 
}

function getCubes() {
    cubes += 1;
}