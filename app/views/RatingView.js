var RatingView = Backbone.View.extend({
  collection: Album,
  // model: Photo,
  // el: $('.dropdown-menu a'),
    // el: $('.photo-area'),

  el: $('.dropdown-menu li a'),
  // tagname: 'href',      
  // template: _.template('<a>test</a>'),

  events: {
    'click': 'updateRating'
  },

  updateRating: function(e) {
    var $target = $(e.currentTarget);
    // console.log(this.model)
    // console.log($target);
    $target.closest('.btn-group')
      .find('[data-bind="label"]').text($target.text())
        .end()
          .children('.dropdown-toggle').dropdown('toggle');
          // console.log($target.text());
    // return $target.html();
    this.model.setRating($target.text(), this.model.get('title'));
    console.log('model title', this.model.get('title'));
  }

});



