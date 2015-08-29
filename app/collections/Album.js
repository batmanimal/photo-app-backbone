// probably do not need this 
var Album = Backbone.Collection.extend({
	model: Photo,
  initialize: function() {
        new RatingView({model: this});

    // this.on('updateView', function() {
    //   // console.log('updateView detected in Album coll');
    //   this.trigger('updateAlbumView', this);
  }
});
