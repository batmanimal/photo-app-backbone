var PhotoView = Backbone.View.extend({
	model: Photo,
  el: $('.photo-area'),
  template: _.template('<div class="resized"><img src="<%= image %>"/></div>'),

	initialize: function() {
    this.render();  
    // this.on('updatePhotoView', function(photo){
    //   console.log(photo);
    //   this.render();
    // });  
  },

	render: function() {
    // console.log('image rendered on click');

    // $('.img').html('');
    // console.log(this.$el.children());
    // this.$el.html();


    // this.$el.html('<p>test</p>');
    this.$el.html(this.template(this.model.attributes));
    $('body').append(this.$el);
  }

});

// var photoView = new PhotoView();
