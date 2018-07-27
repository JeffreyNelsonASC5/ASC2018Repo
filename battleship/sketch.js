let ship1x, ship1y, ship2x, ship2y;
function setup() {
    createCanvas(825,825);
    let x = 0
    let w = 75
    let y = 0
    for( let i = 1; i<=100; i++) {
        fill("blue");
        rect(x, y, w, w);
        if (i % 10 == 0){
            y+=w
            x=0
        } else{
            x+=w
        }

    }
}    
function mouseClicked(){
    //
}
// square = "blue"
// function draw() {
//     fill(square)
//     rect(0, 0, 1000, 1000);

// }

