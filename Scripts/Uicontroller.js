var Uicontroller = pc.createScript('uicontroller');

Uicontroller.attributes.add('uiParent', {
    type: 'entity'
});

Uicontroller.attributes.add('heart', {
    type: 'entity'
});

Uicontroller.attributes.add('waitTimeToShow', {
    type: 'number',
    default: 1.5
});

Uicontroller.attributes.add('infoWindow', {
    type: 'entity'
});

// initialize code called once per entity
Uicontroller.prototype.initialize = function () {
    let myTimeout;
    // Ensure UI is hidden initially
    this.uiParent.enabled = false;
    this.app.on('screenTouch', this.showUI, this);
    this.app.on('lifelessHeart', this.hideUI, this);
};

Uicontroller.prototype.showUI = function () {
    myTimeout= setTimeout(() => {
    // Enable UI after the delay
    this.uiParent.enabled = true;
   this.uiParent.script.groupOpacity.changeOpacity(1);  // Set opacity to make UI visible
    }, this.waitTimeToShow * 1000); 
};

Uicontroller.prototype.hideUI = function () {
    clearTimeout(myTimeout);
    // Hide UI when heart becomes lifeless
    this.uiParent.script.groupOpacity.changeOpacity(0); // Set opacity to 0
    this.uiParent.enabled = false; // Disable the UI parent entity
    this.infoWindow.enabled = false; // Disable the info window as well
};
