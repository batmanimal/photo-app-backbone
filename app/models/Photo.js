var Photo = Backbone.Model.extend({
	defaults: { 
    title: 'unique photo title',
    caption: 'some descriptive caption',
    image: 'https://drscdn.500px.org/photo/81913125/m%3D2048/d6926aeb94599899fc9e76fce241ff94'
  },

  // events: {
  //   'broadcastClick': function(){
  //     console.log('click in model')
  //   }
  // },

  initialize: function() {
    // this.on('dosomething', function() {
    //   // this.trigger('updateView');
    //   console.log('click in model')
    // })
  },

    updateView: function() {
      new PhotoView({model: this});
      // this.trigger('updatePhotoView', this);
    // console.log(this); 



  }


    // this.trigger('updateView', this);


    // console.log(this.attributes.image);

    // for(var i = 0; i < this.models.length; i++) {

    //   var model = this.models[i];

    //   var modelTitle = model.get('title');

    //   if(modelTitle === title) {
    //     console.log(modelTitle);
        
    //   }

    

    // this.trigger('updateView', this);
  

});
