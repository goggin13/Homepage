var Blogs = Backbone.Collection.extend({
  model: Blog,
  comparator: function (blogA, blogB) {
    return blogB.getPublishedAtDate() - blogA.getPublishedAtDate();
  },

  fetch: function () {
    var promises = this.map(function (blog) {
      return blog.fetch();
    });

    return $.when.apply(this, promises);
  }
});
