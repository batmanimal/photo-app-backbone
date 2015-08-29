var ListView = Backbone.View.extend({
  el: $('.list-area'),
  collection: Album,

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html('<div>Photos in this Album</div>');
  }

});
