// probably do not need this 
var Album = Backbone.Collection.extend({
	model: Photo,
  // events: {
  //   'click': 'setRating'
  // },

  initialize: function() {
    new ListView({model: this});
    // this.on('updateRating', this.setRating);
    // this.on('change:rating', this.setPhotoRating);
    // new RatingView({model: this});

  },
  setPhotoRating: function(rating) {
    var that = this;
    this.each(function(photo){
      console.log("setPhotoRating called inside collection");
      if(photo.title = that.get('title')){
        photo.set('rating', that.get('rating'));
      }
    });
    // this.at(0).set('rating', rating);
    // this.reset();
    // rating is passed here - need to bind to the target model 
    // console.log('rating passed to coll: ' + rating);
    // console.log(this);
    // this.each(function(photo){
        // console.log("title1", title1);
      // if(photo.title === this.title) {
      //   // console.log('photo.title inside album, each if', photo.title);
      //   photo.set('rating', this.rating);
        
      // }
    // }, this);
    //         console.log("title1 outside each", title1);

    // this.model.set('rating', rating);
  }
});
