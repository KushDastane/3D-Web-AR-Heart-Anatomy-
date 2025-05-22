var AnimController = pc.createScript('animController');

// initialize code called once per entity
AnimController.prototype.initialize = function() {
    // Listen for the 'screenTouch' event to control animation states
    this.app.on("screenTouch", this.onScreenTouch, this);
    this.app.on("lifelessHeart", this.onHeartDead, this);
    
    // Set the initial state to "Idle"
    this.entity.anim.baseLayer.transition("Initial State", 0.2);
};

// Function to handle toggling between states on screen touch
AnimController.prototype.onScreenTouch = function() {
    // Check the current state and switch to the other state
    if (this.entity.anim.baseLayer.activeState === "Initial State") {
        this.entity.anim.baseLayer.transition("Beating State", 0.2);
    } else {
        this.entity.anim.baseLayer.transition("Initial State", 0.2);
    }
};

AnimController.prototype.onHeartDead = function() {
    // Transition to the lifeless state
    this.entity.anim.baseLayer.transition("Initial State", 0.2); // Assuming "Initial State" is the lifeless state
};


// Clean up event listeners when the script is destroyed
AnimController.prototype.destroy = function() {
    this.app.off("screenTouch", this.onScreenTouch);
    this.app.off("lifelessHeart", this.onHeartDead);
};

