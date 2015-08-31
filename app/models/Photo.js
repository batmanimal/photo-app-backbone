var Photo = Backbone.Model.extend({
	defaults: { 
    title: 'unique photo title',
    caption: 'some descriptive caption',
    rating: '',
    orderCount: null,
    image: 'https://drscdn.500px.org/photo/81913125/m%3D2048/d6926aeb94599899fc9e76fce241ff94'
  },

  initialize: function() {
    // initialize rating view in the collection
    // new RatingView({model: this});
    new OrderCountView({model: this});
  },

  updateView: function() {
    new PhotoView({model: this});
    new RatingView({model: this});

    this.trigger('updatePhotoView', this);

    // this.set('rating', this.get('rating'));

    this.trigger('updateRating', this);
  },

  setRating: function(rating, title) {
    // console.log('rating passed to model: ' + rating);
    console.log('title inside model setRating', title);
    this.set('rating', rating);
        console.log('rating inside model setRating', rating);

    // this.trigger('emitRating', this);
    // this.set('title', title);
  }

});
