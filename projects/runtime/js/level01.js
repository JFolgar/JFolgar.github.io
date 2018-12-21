var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE

        
        function createSawBlade(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle); 
        
        myObstacle.x = x;
        myObstacle.y = y;
        
        game.addGameItem(myObstacle);
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        
        for(var i = 0; i< levelData.gameItems.length; i++){
            createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)
        }
        function createBox(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle); 
        
        myObstacle.x = x;
        myObstacle.y = y;
        
        game.addGameItem(myObstacle);
        
        var obstacleImage = draw.bitmap('img/Bullet Bill.jpg');
        obstacleImage.scaleX = .2;
        obstacleImage.scaleY = .2;
        myObstacle.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        rotationalVelocity = 10;
        }
        
        for(var i = 0; i< levelData.gameItems.length; i++){
            createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
    }
    createBox(1000,400);
    createBox(1400,400);
    createBox(1800,400);

     function createEnemy(x,y) {
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.bitmap('https://vignette.wikia.nocookie.net/supermariogalaxy/images/6/6e/Lil%27_Brrr_Art.png/revision/latest?cb=20150323001203');
        redSquare.scaleX = .5;
        redSquare.scaleY = .5;
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);  
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
    
   
    enemy.onPlayerCollision = function() {
    game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function() {
        console.log('Halle has hit the enemy');
        enemy.fadeOut();
    };
 
    }
   
        createEnemy(400,groundY-50);
        createEnemy(800,groundY-50);
        createEnemy(1200,groundY-50);

    
     function createReward(x,y) {
        var reward =  game.createGameItem('enemy',25);
        var greenSquare = draw.bitmap('https://www.mariowiki.com/images/thumb/f/f5/StarMK8.png/629px-StarMK8.png');
        greenSquare.scaleX =.1;
        greenSquare.scaleY =.1;
        greenSquare.x = -25;
        greenSquare.y = -25;
        reward.addChild(greenSquare);  
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -2;
        
        reward.onPlayerCollision = function() {
        game.increaseScore(+10);
        reward.shrink();
 
    };
}
     
        createReward(800,groundY-100);
        createReward(1200,groundY-100);
        createReward(1600,groundY-100);
        
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}