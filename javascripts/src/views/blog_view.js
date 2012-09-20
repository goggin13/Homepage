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
      return this.render();
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
    render: function() {
      var $div, first,
        _this = this;
      this.renderHeaderWithContent(this.template());
      $div = this.$el.find('.posts');
      first = true;
      this.collection.each(function(post) {
        var view;
        view = new BlogView({
          model: post,
          expanded: first
        });
        first = false;
        return $div.append(view.render().el);
      });
      return this;
    }
  });

  window.BlogPageView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html())
  });

}).call(this);
