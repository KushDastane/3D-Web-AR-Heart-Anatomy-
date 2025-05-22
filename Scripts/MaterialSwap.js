var MaterialSwap = pc.createScript('materialSwap');

// Attributes for the materials
MaterialSwap.attributes.add('aliveMaterial', { type: 'asset', assetType: 'material' });
MaterialSwap.attributes.add('lifelessMaterial', { type: 'asset', assetType: 'material' });

// Initialize code called once per entity
MaterialSwap.prototype.initialize = function() {
    // Set the initial material to alive
    this.currentMaterial = this.lifelessMaterial.resource;
    this.setHeartMaterial(this.currentMaterial);
    

    // Listen for the toggleHeart event
    this.app.on('screenTouch', this.onScreenTouch, this);
    this.app.on('lifelessHeart', this.onHeartDead, this);
};

// Function to set the heart material
MaterialSwap.prototype.setHeartMaterial = function(material) {
    var renders = this.entity.findComponents('render');
    for (var i = 0; i < renders.length; i++) {
        var meshInstances = renders[i].meshInstances; 
        for (var j = 0; j < meshInstances.length; j++) {
            meshInstances[j].material = material;
        }
    }
};

// Function to handle the toggleHeart event
MaterialSwap.prototype.onScreenTouch = function() {
    if (this.currentMaterial === this.aliveMaterial.resource) {
        this.currentMaterial = this.lifelessMaterial.resource;
    } else {
        this.currentMaterial = this.aliveMaterial.resource;
    }
    this.setHeartMaterial(this.currentMaterial);
};

MaterialSwap.prototype.onHeartDead = function() {
    // Set the material to lifeless when the heart goes dead
    this.currentMaterial = this.lifelessMaterial.resource;
    this.setHeartMaterial(this.currentMaterial);
};

// Clean up event listeners when the script is destroyed
MaterialSwap.prototype.destroy = function() {
    this.app.off('screenTouch', this.onScreenTouch);
     this.app.off('lifelessHeart', this.onHeartDead);
};
