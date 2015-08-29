var RatingView = Backbone.View.extend({
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

    console.log(this.model);

  //   $( "select" )
  // .change(function () {
  //   var str = "";
  //   $( "select option:selected" ).each(function() {
  //     str += $( this ).text() + " ";
  //   });
  //   $( "div" ).text( str );
  // })
  // .change();
    this.model.setRating($target.html());
  }

});



