(function() {

  window.BlogView = Backbone.View.extend({
    template: _.template(($('#tpl_blog_view')).html()),
    events: {
      'click .expand': 'expand'
    },
    expand: function() {
      this.options.parent.expandMe(this.model);
      return console.log('expand');
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  window.BlogsView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html()),
    title: "blog",
    expandMe: function(model) {
      this.collection.each(function(post) {
        return post.set({
          expanded: post.getId() === model.getId()
        });
      });
      return this.render();
    },
    render: function() {
      var $ul,
        _this = this;
      this.renderHeaderWithContent(this.template());
      $ul = this.$el.find('ul');
      this.collection.each(function(post) {
        var view;
        view = new BlogView({
          model: post,
          parent: _this
        });
        return $ul.append(view.render().el);
      });
      return this;
    }
  });

  window.BlogPageView = window.StaticView.extend({
    template: _.template(($('#tpl_blogs_view')).html())
  });

}).call(this);
