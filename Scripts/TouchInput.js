var TouchInput = pc.createScript('touchInput');

TouchInput.attributes.add('killSwitch',{type:"entity"});
TouchInput.attributes.add('killSwitchText',{type:"entity"});

// Initialize script and add event listener
TouchInput.prototype.initialize = function() {
    // Add an event listener for screen touches
    //this.app.touch.on(pc.EVENT_TOUCHSTART, this.onScreenTouch, this);

    this.heartAlive = false;
    this.killSwitch.button.on('click',this.onKill,this);

};

// Function to run when screen is touched
TouchInput.prototype.onKill = function(event) {
    // Fire a custom event called "screenTouch"
    //this.app.fire('screenTouch');

    this.heartAlive = !this.heartAlive; //Toggle state

    if(this.heartAlive){
        this.app.fire("screenTouch");
        this.killSwitchText.element.text = "Human Heart : Alive";
        
    }
    else{
        this.app.fire("lifelessHeart");
        this.killSwitchText.element.text = "Human Heart : Dead";
    }
};

// Clean up event listeners when the script is destroyed
TouchInput.prototype.destroy = function() {
    this.app.touch.off(pc.EVENT_TOUCHSTART, this.onScreenTouch, this);
};
