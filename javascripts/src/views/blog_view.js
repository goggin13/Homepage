(function() {

  window.BlogView = Backbone.View.extend({
    template: _.template(($('#tpl_blog_view')).html()),
    converter: new Showdown.converter(),
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
      return this;
    }
  });

  window.BlogsView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html()),
    title: "blog",
    render: function() {
      var $ul, first,
        _this = this;
      this.renderHeaderWithContent(this.template());
      $ul = this.$el.find('ul');
      first = true;
      this.collection.each(function(post) {
        var view;
        view = new BlogView({
          model: post,
          expanded: first
        });
        first = false;
        return $ul.append(view.render().el);
      });
      return this;
    }
  });

  window.BlogPageView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html())
  });

}).call(this);
