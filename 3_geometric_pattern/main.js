var num_circles = 12;
var circleDiameter;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/num_circles;
}

function draw() {
    var y = 0;
    while (y <= height){
    
        var x = 0;
         while (x <= width) {
           ellipse(x, y, circleDiameter, circleDiameter);
        
           x = x + circleDiameter
        }
        
        y = y + circleDiameter
    }
}