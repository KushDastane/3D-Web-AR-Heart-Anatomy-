var PhysicsHandler = pc.createScript('physicsHandler');

// initialize code called once per entity
PhysicsHandler.prototype.initialize = function () {
    this.heartAlive = false;

    // Save the original position and rotation of the heart
    this.originalPos = this.entity.getLocalPosition().clone();
    this.originalRot = this.entity.getLocalEulerAngles().clone(); 

    // Listen for the events to bring heart to life or make it lifeless
    this.app.on("screenTouch", this.HeartAlive, this);
    this.app.on("lifelessHeart", this.HeartDead, this);
};

// Event to bring the heart back to life
PhysicsHandler.prototype.HeartAlive = function (event) {
    // Set physics to static to disable movement due to forces
    this.entity.rigidbody.type = pc.BODYTYPE_STATIC;

    // Tween to animate the heart back to its original position
    this.entity.tween(this.entity.getLocalPosition())
        .to(this.originalPos, 1, pc.Linear)
        .start(); 

    // Tween to animate the heart's rotation back to the original
    this.entity.tween(this.entity.getLocalRotation())
        .to(this.originalRot, 1, pc.Linear)
        .start(); 
};

// Event to make the heart lifeless (fall)
PhysicsHandler.prototype.HeartDead = function (event) {
    // Enable dynamic physics to let the heart fall
    this.entity.rigidbody.type = pc.BODYTYPE_DYNAMIC;
};

// Clean up event listeners when the script is destroyed
PhysicsHandler.prototype.destroy = function () {
    this.app.off("screenTouch", this.HeartAlive, this);
    this.app.off("lifelessHeart", this.HeartDead, this);
};
