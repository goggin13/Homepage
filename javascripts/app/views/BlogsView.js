var BlogsView = Backbone.View.extend({
  template: Template.fetch("Blogs"),
  
  getViews: function () {
    if (this.views) {
      return this.views;
    } else {
      this.views = this.collection.map(function (blog) {
        return new BlogView({model: blog});
      });
      return this.views;
    }
  },

  renderBlogs: function () {
    var $posts = this.$el.find(".posts");
    _.each(this.getViews(), function (blogView) {
      $posts.append(blogView.render().el);
    });
  },

  render: function () {
    var html = this.template({});
    this.$el.html(html);

    this.renderBlogs();
    this.getViews()[0].toggle();
    return this;
  }
});

window.BlogsView = BlogsView;
