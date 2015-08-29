var Photo = Backbone.Model.extend({
	defaults: { 
    title: 'unique photo title',
    caption: 'some descriptive caption',
    rating: '',
    image: 'https://drscdn.500px.org/photo/81913125/m%3D2048/d6926aeb94599899fc9e76fce241ff94'
  },

  initialize: function() {
    new RatingView({model: this});
  },

  updateView: function() {
    // new PhotoView({model: this});
    this.trigger('updatePhotoView', this);
  },

  setRating: function(rating) {
    console.log('rating passed to model: ' + rating);
    // new RatingView({model: this});
    this.set('rating', rating);
    // console.log(this.get('rating'));
  }

});
