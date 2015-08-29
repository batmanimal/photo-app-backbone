var ListItemView = Backbone.View.extend({

  template: _.template('<a><%= title %></a>'),
  model: Photo,

  events: {
    'click': 'broadcastClick'
  },

  initialize: function(){
    this.render();
  },

  broadcastClick: function() {
    this.model.updateView();
  },

  render: function(){
    this.$el.append(this.template(this.model.attributes));
    $('.list-area').append(this.$el);
  }

});
