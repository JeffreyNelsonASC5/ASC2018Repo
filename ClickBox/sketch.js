function setup(){
    createCanvas(600, 600);
}

let square = "blue";
function draw() {
    background(150);
    
    fill(square);
    rect(0, 0, 600, 600);

}

function mouseClicked() {
    if (square === "blue") {
    square = "red";
    } else if (square == "red"){
        square = "blue"
    }

}
