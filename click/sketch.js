function setup() {
    createCanvas(600, 600);
}

let square1 = "blue";
let square2 = "blue";
function draw() {
    background(150);
    line(mouseX, 0, mouseX, 600);

    fill(square1);
    rect(0, 0, 300, 600);

    fill(square2);
    rect(300, 0, 300, 600);
}

function mouseClicked() {
    if (mouseX<300)
    if (square1 == "blue") {
    square1 = "red";
    } else if (square1 == "red")
        square1 = "blue";
    if (mouseX>300)
    if (square2 == "blue") 
    square2 = "red";
     else if (square2 == "red") {
        square2 = "blue";
    }
}

    
