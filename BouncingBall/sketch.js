function setup(){
    createCanvas(600, 600);
}


let x = 20;
let y = 0;
let xdirect = 1;
let ydirect = 1;
let xchange = 2;
let ychange = 2;

function draw(){
    background(150);
    // fill("red");
    // ellipse(x, y+300, 5);

    fill("black");
    ellipse(x,y,25);

    // fill("blue");
    // ellipse(x, y+200, 5);

    // fill("purple");
    // ellipse(x, y+400, 5);

    // fill("green");
    // ellipse(x, y+500, 5);


    if (x>550){
            xdirect=-1
    }
    if(x<=20){
            xdirect=1
    }
    x+=xchange*xdirect

    if (y>550){
        ydirect=-1
    }
        if(y<=0){
        ydirect=1
        
        }
        y+=ychange*ydirect
}




// function draw(){
//     background(100);
//     fill("black");
//     ellipse(x,100,75);
//     x++;
// }


