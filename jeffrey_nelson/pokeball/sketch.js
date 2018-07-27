function setup(){
    createCanvas(300,300);
    background(225);
    stroke("black");
    strokeWeight(4);

    fill("red");
    ellipse(150, 150, 250,250);
    strokeWeight(4);
    fill("white");
    arc(150, 150, 250, 250, 0,  PI, CHORD);
    ellipse(150, 150, 50, 50);
    
    fill("black");
    ellipse(150, 150, 25, 25);


}