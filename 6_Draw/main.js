var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d")

var x = 375;
var y = 375;
var mouseX = 375;
var mouseY = 375;

var velocity = 1;
var radius = 10;
var body =100;

var x1;
var y1;
var x2;
var y2;
var x3;
var y3;
var x4;
var y4;
var x5;
var y5;
var x6;
var y6;
var x7;
var y7;

function food() {
    
    x1 = Math.random() * 730 + 10;
    y1 = Math.random() * 730 + 10;

    x2 = Math.random() * 730 + 10;
    y2 = Math.random() * 730 + 10;

    x3 = Math.random() * 730 + 10;
    y3 = Math.random() * 730 + 10;

    x4 = Math.random() * 730 + 10;
    y4 = Math.random() * 730 + 10;

    x5 = Math.random() * 730 + 10;
    y5 = Math.random() * 730 + 10;
    
    x6 = Math.random() * 730 + 10;
    y6 = Math.random() * 730 + 10;
    
    x7 = Math.random() * 730 + 10;
    y7 = Math.random() * 730 + 10;
}

function drawCircle(cx, cy, r, cc) {
    
    context.beginPath();
    context.arc(cx, cy, r, 0, 2 * Math.PI);
    context.fillStyle = cc;
    context.fill();
}

function clearCanvas() {
    context.beginPath();
    context.rect(0, 0, 750, 750);
    context.fillStyle = "black";
    context.fill();
}

function calcPosition() {
    if (x > mouseX){
        x -= velocity;
    } else {
        x += velocity;
    }
    
    if (y > mouseY){
        y -= velocity;
    } else {
        y += velocity;
    } 
}

function drawScreen() {
    clearCanvas();
    calcPosition();
    drawCircle(x1, y1, 5, "red");
    drawCircle(x2, y2, 5, "red");
    drawCircle(x3, y3, 5, "red");
    drawCircle(x4, y4, 5, "red");
    drawCircle(x5, y5, 5, "red");
    drawCircle(x6, y6, 5, "red");
    drawCircle(x7, y7, 5, "red");
    drawCircle(x, y, radius, "cyan");
    setTimeout(drawScreen, 500/60);
    
    if (Math.abs(x  - x1) < radius && Math.abs(y - y1) < radius) {
        body += 40;  Math.
        radius = Math.sqrt(body);
        x1 = -500;
    } else if (Math.abs(x  - x2) < radius && Math.abs(y - y2) < radius) {
        body += 40;
        radius = Math.sqrt(body);
        x2 = -500;
    } else if (Math.abs(x  - x3) < radius && Math.abs(y - y3) < radius) {
        body += 40;
        radius = Math.sqrt(body);
        x3 = -500;
    } else if (Math.abs(x  - x4) < radius && Math.abs(y - y4) < radius) {
        body += 40;
        radius = Math.sqrt(body);
        x4 = -500;
    } else if (Math.abs(x  - x5) < radius && Math.abs(y - y5) < radius) {
        body += 40;
        radius = Math.sqrt(body);
        x5 = -500;
    } else if (Math.abs(x  - x6) < radius && Math.abs(y - y6) < radius) {
        body += 40;
        radius = Math.sqrt(body);
        x6 = -500;
    } else if (Math.abs(x  - x7) < radius && Math.abs(y - y7) < radius) {
        body += 40;
        radius = Math.sqrt(body);
        x7 = -500; 
    }
    
    if (x1 == -500)
    {
        if (Math.random() > 0.995) {
            x1 = Math.random() * 730 + 10;
            y1 = Math.random() * 730 + 10; 
        }
    }
    if (x2 == -500) {
        if (Math.random() > 0.995) {
            x2 = Math.random() * 730 + 10;
            y2 = Math.random() * 730 + 10; 
        }
    }
    if (x3 == -500) {
        if (Math.random() > 0.995) {
            x3 = Math.random() * 730 + 10;
            y3 = Math.random() * 730 + 10; 
        }
    } 
    if (x4 == -500) {
        if (Math.random() > 0.995) {
            x4 = Math.random() * 730 + 10;
            y4 = Math.random() * 730 + 10; 
        }
    }
    if (x5 == -500) {
        if (Math.random() > 0.995) {
            x5 = Math.random() * 730 + 10;
            y5 = Math.random() * 730 + 10; 
        }
    } else if (x6 == -500)
    {
        if (Math.random() > 0.995) {
            x6 = Math.random() * 730 + 10;
            y6 = Math.random() * 730 + 10; 
        }
    } 
    if (x7 == -500) {
        if (Math.random() > 0.995) {
            x7 = Math.random() * 730 + 10;
            y7 = Math.random() * 730 + 10; 
        }
    }
    
}

function mouseMoved(mouse) {
    mouseX = mouse.clientX - 10;
    mouseY = mouse.clientY - 10;
}

canvas.addEventListener("mousemove", mouseMoved);
food();
drawScreen();