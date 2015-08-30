// probably do not need this 
var Album = Backbone.Collection.extend({
	model: Photo,
  initialize: function() {
    new ListView({model: this});
    // new RatingView({model: this});
  }
  // setRating: function(rating) {
  //   // rating is passed here - need to bind to the target model 
  //   console.log('rating passed to coll: ' + rating);
  //   this.set('rating', rating);
  // }
});
