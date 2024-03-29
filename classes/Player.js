// PLAYER CLASS
export class Player {

    // PLAYER CONSTRUCTOR
    constructor(game){
        this.game = game;
        this.image = document.getElementById('player');
        this.x = this.game.width * 0.5;
        this.y = this.game.height * 0.5;
        this.radius = 40;
        this.aim;
        this.angle = 0;
    }  
    
    // DRAW PLAYER
    draw(context){
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle)
        context.drawImage(this.image, -this.radius, -this.radius);
        
        // PLAYER DEBUG FEATURE
        if (this.game.debug){
            context.beginPath();
            context.arc(0, 0, this.radius, 0, Math.PI * 2);
            context.stroke();    
        }
        
        context.restore();
    }

    // PLAYER UPDATE
    update() {
        this.aim = this.game.calcAim(this.game.planet, this.game.mouse );
        this.x = this.game.planet.x + (this.game.planet.radius + this.radius) * this.aim[0];
        this.y = this.game.planet.y + (this.game.planet.radius + this.radius) * this.aim[1];
        this.angle = Math.atan2(this.aim[3], this.aim[2]);
    }

    // PLAYER SHOOT
    shoot(){
        const projectile = this.game.getProjectile();
        if(projectile) projectile.start(this.x + this.radius * this.aim[0], this.y + this.radius * this.aim[1], this.aim[0], this.aim[1]);
    }

}