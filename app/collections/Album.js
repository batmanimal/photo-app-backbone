// probably do not need this 
var Album = Backbone.Collection.extend({
	model: Photo,
  initialize: function() {
    this.on('updateView', function() {
      console.log('updateView detected in Album coll');
      this.trigger('updateAlbumView', this);
    })
  }
  // updateView: function() {
  //   console.log('updateView triggered in Album');
  //   console.log(this);

  //   // this.get('');

  //   this.trigger('updateView', this);
  // }
	// localStorage: new Store("backbone-photo")
});

// var album = new Album();
