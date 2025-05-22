var GroupOpacity = pc.createScript('groupOpacity');

GroupOpacity.attributes.add('opacity', {
    type: 'number',
    default: 1,
});

GroupOpacity.attributes.add('uiElements', {
    type: 'entity',
    array: true
});

GroupOpacity.prototype.initialize = function () {
     this.setOpacity();
    // Check group opacity real time when the attribute is changed
    this.on('attr:opacity', this.setOpacity, this);
};

GroupOpacity.prototype.setOpacity = function () {
    // Change the opacity of all elements in the array
    for (let i = 0; i < this.uiElements.length; i++) {
        const item = this.uiElements[i];
        item.element.opacity = this.opacity;
    }
};

GroupOpacity.prototype.changeOpacity = function (opacityLevel) {
    this.opacity = opacityLevel;
    this.setOpacity(); 
};