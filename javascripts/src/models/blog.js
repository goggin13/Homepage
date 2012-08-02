(function() {

  window.BlogPost = Backbone.Model.extend({
    getId: function() {
      return this.get('_id');
    },
    getTitle: function() {
      return this.get('title');
    }
  });

  window.BlogPosts = Backbone.Collection.extend({
    url: "" + window.app.blog_domain + "posts.json",
    model: BlogPost
  });

}).call(this);
