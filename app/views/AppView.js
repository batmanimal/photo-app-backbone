var AppView = Backbone.View.extend({
  el: $('.app'),
  initialize: function() {
    this.photo = new PhotoView();
    this.render();
  },
  render: function() {
    this.$el.append(this.photo.$el);
    return this;
  }
});

