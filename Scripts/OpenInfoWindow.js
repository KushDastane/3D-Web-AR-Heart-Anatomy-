var OpenInfoWindow = pc.createScript('openInfoWindow');

OpenInfoWindow.attributes.add('infoWindow', { type: 'entity' });
OpenInfoWindow.attributes.add('infoTitle', { type: 'entity' });
OpenInfoWindow.attributes.add('infoText', { type: 'entity' });

OpenInfoWindow.attributes.add('title', { type: 'string' });
OpenInfoWindow.attributes.add('information', { type: 'string' });

OpenInfoWindow.prototype.initialize = function () {
    //Add the click action to the button to open the info window
    this.entity.button.on('click', this.openWindow, this);
};

OpenInfoWindow.prototype.openWindow = function () {
    // Open info window 
    this.infoWindow.enabled = true;

    // Set the description depending on which button was pressed
    this.infoText.element.text = this.information;
    this.infoTitle.element.text = this.title;
};