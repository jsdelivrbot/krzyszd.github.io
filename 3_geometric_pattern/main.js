var num_circles = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    
    frameRate(15)
    
    circleDiameter = width/num_circles;
    circleRadius = circleDiameter/2
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
}

function draw() {
    var isShifted = false;
    
    var y = height;
    
    while (y >= 0){
         
         var x;
         
        if (isShifted){
            x = circleRadius;
        } else {
            x = 0;
        }
        
         while (x <= width) {
            fill(color(rVal, gVal, bVal));
            stroke(color(rVal, gVal, bVal));
            ellipse(x, y, 1.5 * circleDiameter, 0.5 * circleDiameter);
        
            x = x + 2 * circleDiameter;
        }
        
        y = y - 3 / 10 * circleRadius;
        isShifted = !isShifted;
        
        rVal = (rVal + 5) % 256;
        gVal = (gVal + 0) % 256;
        bVal = (bVal + 55) % 256;
    }
}