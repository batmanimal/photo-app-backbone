var OrderCountView = Backbone.View.extend({
  model: Photo,
  // el: $('.photo-area'),
  template: _.template('<div><%= orderCount %></div>'),

  // events: {
  //   'click a': 'showCount'
  // },

  // initialize: function() {
  //   this.render();  
  // },

  showCount: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    $('body').append(this.$el);
  }

});