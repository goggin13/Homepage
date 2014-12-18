var Router = Backbone.Router.extend({
  routes: {
    "": "blog",
    "blog": "blog",
    "about": "about",
    "links": "links"
  },

  blog: function () {
    var blogIds = [1, 2, 3, 4, 5, 6, 7];
    var me = this;

    var blogs = new Blogs();
    _.each(blogIds, function (blogId) {
      blogs.push(new Blog({id: blogId}));
    });

    blogs.fetch().done(function () {
      blogs.sort();
      var blogsView = new BlogsView({collection: blogs});
      me.setView(blogsView);
    });
  },

  about: function () {
    var aboutView = new AboutView();
    this.setView(aboutView);
  },

  links: function () {
    var linksView = new LinksView();
    this.setView(linksView);
  },

  setView: function (view) {
    $("#box_content").html(view.render().el);
  }
});

var router = new Router();
$(document).ready(function () {
  Backbone.history.start();
});
