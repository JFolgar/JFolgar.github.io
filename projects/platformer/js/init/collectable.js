(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 1},
        max: {assetKey: 'max', points: 3},
        steve: {assetKey: 'steve', points: 2},
        grace: {assetKey: 'grace', points: 4},
        kennedi: {assetKey: 'kennedi', points: 10000000000000}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.kennedi, 700, 180, 6, 0.7);
        collectable.create(type.db, 850, 150);
        collectable.create(type.db, 850, 250);
        collectable.create(type.db, 850, 350);
        collectable.create(type.db, 850, 450);
        collectable.create(type.steve, 775, 600, 6, 0.7);
        collectable.create(type.steve, 600, 600, 6, 0.7);
        collectable.create(type.steve, 400, 600, 6, 0.7);
        collectable.create(type.steve, 200, 600, 6, 0.7);
        collectable.create(type.max, 20, 540);
        collectable.create(type.max, 300, 450);
        collectable.create(type.max, 500, 450);
        collectable.create(type.max, 700, 450);
        collectable.create(type.grace, 200, 310, 0);
        collectable.create(type.grace, 400, 340);
        collectable.create(type.grace, 0, 270);
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);