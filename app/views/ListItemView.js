var ListItemView = Backbone.View.extend({
  tagName: 'table',
  template: _.template('<tr><td><a><%= title %></a></td></tr>'),
  model: Photo,

  events: {
    'click': 'broadcastClick'
  },

  initialize: function(){
    this.render();
    // this.model.on('click', this.updateView, this);
    // this.updateView();
  },

  // updateView: function() {
  //   this.render();
  // },

  broadcastClick: function() {
    // console.log('broadcastClick');
    this.model.updateView();
    // this.trigger('dosomething', this);
  },

  render: function(){
    // create binding for scope to use in map

    var scope = this;
    // // append to dom
    $('body').append(this.$el);
    // this.$el.html('<th>Photos in this Album</th>');
    this.$el.append(scope.template(this.model.attributes));
    // scope.$el.append(scope.template(this.model.attributes));
  }

});