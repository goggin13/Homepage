(function() {

  window.BlogView = Backbone.View.extend({
    template: _.template(($('#tpl_blog_view')).html()),
    converter: new Showdown.converter(),
    className: 'post',
    events: {
      'click .toggle': 'toggle'
    },
    toggle: function() {
      this.options.expanded = !this.options.expanded;
      if (this.options.expanded) {
        window.navigateTo("#/blog/" + (this.model.getId()), true);
      } else {
        window.navigateTo("#/blog", true);
      }
      return this.render();
    },
    hide: function() {
      this.options.expanded = false;
      return this.render();
    },
    scroll_to: function() {
      return $('html, body').animate({
        scrollTop: this.$el.offset().top
      }, 500);
    },
    render: function() {
      var data;
      data = this.model.toJSON();
      data.content = this.converter.makeHtml(data.content);
      data.expanded = this.options.expanded;
      this.$el.html(this.template(data));
      this.$('a').each(function(idx, a) {
        return ($(a)).attr('target', '_blank');
      });
      return this;
    }
  });

  window.BlogsView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html()),
    title: "blog",
    initialize: function() {
      _.bindAll(this);
      return this.views = {};
    },
    toggle_post: function(id) {
      var _this = this;
      _.each(this.views, function(v) {
        return v.hide();
      });
      this.views[id].toggle();
      return this.views[id].scroll_to();
    },
    render: function() {
      var $div, first,
        _this = this;
      this.renderHeaderWithContent(this.template());
      $div = this.$el.find('.posts');
      first = true;
      this.collection.each(function(post) {
        _this.views[post.getId()] = new BlogView({
          model: post,
          expanded: first
        });
        first = false;
        return $div.append(_this.views[post.getId()].render().el);
      });
      return this;
    }
  });

  window.BlogPageView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html())
  });

}).call(this);
