// COLLISION ANIMATION CLASS
export class CollisionAnimation {
    // CONSTRUCTOR
    constructor(game, x, y){
        // GET SPRITE
        this.game = game;
        this.image = document.getElementById('collisionAnimation');
        // SPRITE SIZE
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.sizeModifier = Math.random() + 0.5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        // SPRITE SET FRAME
        this.frameX = 0;
        this.maxFrame = 4;
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 5;
        this.frameInterval = 1000/this.fps;
        this.frametimer = 0;

    }
    // DRAW
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0 , this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);}
    
    // UPDATE
    update(deltaTime){

        this.x -= this.game.speed;

        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frametimer = 0;
        } else {this.frameTimer += deltaTime;}
 
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
}