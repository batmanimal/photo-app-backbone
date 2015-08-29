var Photo = Backbone.Model.extend({
	defaults: { 
    title: 'unique photo title',
    caption: 'some descriptive caption',
    image: 'https://drscdn.500px.org/photo/81913125/m%3D2048/d6926aeb94599899fc9e76fce241ff94'
  },

  updateView: function() {
    new PhotoView({model: this});
    this.trigger('updatePhotoView', this);
  }

});
