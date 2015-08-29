var RatingView = Backbone.View.extend({
  // collection: Album,
  model: Photo,
  // el: $('.dropdown-menu a'),
  el: $('.dropdown-menu li a'),
  // tagname: 'href',      
  // template: _.template('<a>test</a>'),

  events: {
    'click': 'updateRating'
  },

  // initialize: function() {
  //   // console.log(this.el);
  //   this.render();
  // },

  // render: function() {
  //   this.$el.html('<a>test</a>');
  //   $('body').append(this.$el);
  // },

  updateRating: function(e) {
    var $target = $(e.currentTarget);
    // console.log($target);
    $target.closest('.btn-group')
      .find('[data-bind="label"]').text($target.text())
        .end()
          .children('.dropdown-toggle').dropdown('toggle');
          // console.log($target.html());
    // return $target.html();
console.log(this.model);
    // this.model.setRating($target.text());
  }

});



