var ListView = Backbone.View.extend({
  tagName: 'table',
  // template: _.template('<tr><td><a><%= title %></a></td></tr>'),
  collection: Album,

  events: {
    'click': 'broadcastClick'
  },

  initialize: function(){
    this.render();
    // this.collection.on('click', this.updateView, this);
    // this.updateView();
  },

  updateView: function() {
    this.render();
  },

  broadcastClick: function() {
    this.collection.updateView();
  },

  render: function(){
    // create binding for scope to use in map
    // var scope = this;
    // // append to dom
    // $('body').append(this.$el);
    this.$el.html('<th>Photos in this Album</th>');
    this.collection.each(function(photo) {
      return new ListItemView({model: photo}).render();

    });

    // this.$el.append(scope.template(this.model.attributes));
    // this.collection.map(function(photo) {
    //   scope.$el.append(scope.template(photo.attributes));
    // });
  }

});