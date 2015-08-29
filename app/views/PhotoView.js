var PhotoView = Backbone.View.extend({
	model: Photo,
  el: $('.photo-area'),
  template: _.template('<div class="resized"><img src="<%= image %>"/></div><div class="caption"><%= caption %></div>'),

	initialize: function() {
    this.render();  
  },

	render: function() {
    this.$el.html(this.template(this.model.attributes));
    $('row').append(this.$el);
  }

});
