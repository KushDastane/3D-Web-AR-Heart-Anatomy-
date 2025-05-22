var CloseInfoWindow = pc.createScript('closeInfoWindow');

CloseInfoWindow.attributes.add('infoWindow', { type: 'entity' });
CloseInfoWindow.attributes.add('closeButton', { type: 'entity' });

// initialize code called once per entity
CloseInfoWindow.prototype.initialize = function () {
    // Add event to close this the info window to the button
    this.closeButton.button.on('click', this.closeWindow, this);
};

CloseInfoWindow.prototype.closeWindow = function () {
    this.infoWindow.enabled = false;
};