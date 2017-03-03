var groundSprites;

var player;
var groundSpriteWidth = 50;
var groundSpriteHeight = 50;
var numGroundSprites;
var obstacles;

var Gravity = 0.3;
var jump = -5;

var isGameOver;
var score;

function setup() {
    isGameOver = false;
    score = 0;
    
    createCanvas(400, 300);   
    background(150, 200, 250);
    groundSprites = new Group();
    obstacles = new Group();
    
    numGroundSprites = width/groundSpriteWidth + 1;
    for (var n = 0; n < numGroundSprites;  n++){
        var groundSprite = createSprite(n*50, height - 25, groundSpriteWidth, groundSpriteHeight);
        groundSprites.add(groundSprite);
    }
    
    player = createSprite(100, height - 75, 50, 50);
}

function draw() {
    
    if (isGameOver) {
        background(0);
        fill(255);
        textAlign(CENTER);
        
        text("Your score is: " + score, camera.position.x, camera.position.y - 20);
        text("Game Over! Click anywhere to restart", camera.position.x, camera.position.y);
    
    } else {
    
        background(150, 200, 250);
        
        if (groundSprites.overlap(player)) {
            player.velocity.y = 0;
            player.position.y = (height - 50) - (player.height/2);
        }
        player.velocity.y += Gravity;
    
        if (keyDown(UP_ARROW)){
            player.velocity.y = jump;
        }
    
        player.position.x += 5;
        camera.position.x = player.position.x + width / 4;
    
    
        var firstground = groundSprites[0];
    
        if (firstground.position.x <= camera.position.x - (width/2 + firstground.width/2)) {
            groundSprites.remove(firstground);
            firstground.position.x += numGroundSprites *  firstground.width; 
            groundSprites.add(firstground);
        }
    
        if (random() > 0.95){
            var obstacle = createSprite(camera.position.x + width, random(0, height - 65), 30, 30);
            obstacles.add(obstacle);
        }
    
    
        var firstOb = obstacles[0];
    
        if (obstacles.length > 0 && firstOb.position.x <= (camera.position.x - (width/2 + firstOb.width / 2))) {
            removeSprite(firstOb);
        }
    
        obstacles.overlap(player, endGame);
    
        drawSprites();
        score += 1;
    
        textAlign(CENTER)
        text(score, camera.position.x, 10)
    }
}

function endGame() {
    isGameOver = true;
    console.log("Game Over");
    
}

function mouseClicked() {
    if (isGameOver) {
        for (var n = 0; n < numGroundSprites;  n++) {
            var groundSprite = groundSprites[n];
            groundSprite.position.x = n * 50;
        }
        isGameOver = false;
        
        player.position.x = 100;
        player.position.y = height - 75;
        
        obstacles.removeSprites();
        score = 0;
    }
}