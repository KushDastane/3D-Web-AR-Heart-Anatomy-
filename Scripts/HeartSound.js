var HeartSound = pc.createScript('heartSound');

HeartSound.attributes.add('heart', {
    type: 'entity'
});

// initialize code called once per entity
HeartSound.prototype.initialize = function() {
    
    this.heart.sound.stop('HeartBeat');
    this.heart.sound.stop('HeartBeep');
    this.app.on("screenTouch", this.HeartAlive, this);
    this.app.on("lifelessHeart", this.HeartDead, this);

};

HeartSound.prototype.HeartAlive = function(event) {
 
 this.heart.sound.stop();  // Stop any active sound
 this.heart.sound.play('HeartBeat');

}

HeartSound.prototype.HeartDead = function(event) {

this.heart.sound.stop();  // Stop any active sound
this.heart.sound.play('HeartBeep'); 
    
}

// update code called every frame
HeartSound.prototype.update = function(dt) {

};

