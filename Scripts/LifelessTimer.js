var LifelessTimer = pc.createScript('lifelessTimer');

// initialize code called once per entity
LifelessTimer.prototype.initialize = function() {
    this.timerDuration=30;
    this.timer=0;
    this.resetTimer();

    this.app.on("screenTouch",this.resetTimer,this);
};

// update code called every frame
LifelessTimer.prototype.update = function(dt) {
    this.timer+=dt;

    if(this.timer>=this.timerDuration){
        this.timerExpired();
    }
};

LifelessTimer.prototype.resetTimer=function(){
    this.timer=0;
};

LifelessTimer.prototype.timerExpired=function(){
    this.app.fire("lifelessHeart");
    this.resetTimer();
};