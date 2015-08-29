var PhotoView = Backbone.View.extend({
	model: Photo,
  el: $('.photo-area'),
  template: _.template('<div class="resized"><img src="<%= image %>"/></div><div class="caption"><%= caption %></div><div class="count"><%= orderCount %> of <%= this.model.collection.models.length %></div>'),

	initialize: function() {
    this.render();  
    console.log(this.model);
  },

	render: function() {
    this.$el.html(this.template(this.model.attributes));
    $('row').append(this.$el);
  }

});
