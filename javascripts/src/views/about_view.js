(function() {

  window.AboutView = window.StaticView.extend({
    template: ($('#tpl_about_view')).html(),
    title: 'about',
    id: 'about',
    events: {
      'mouseover img': 'toggleCalvin',
      'mouseout img': 'toggleGoggin'
    },
    image: function() {
      return this.img || (this.img = this.$('img'));
    },
    toggleCalvin: function() {
      return this.image().attr('src', 'images/calvin_and_hobbes.png');
    },
    toggleGoggin: function() {
      return this.image().attr('src', 'images/headshot.png');
    }
  });

}).call(this);
