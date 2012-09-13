(function() {

  window.BlogPost = Backbone.Model.extend({
    getId: function() {
      return this.get('_id');
    },
    getTitle: function() {
      return this.get('title');
    },
    getPublishedAt: function() {
      return this.get('published_at');
    },
    getPublishedAtPretty: function() {
      var d;
      d = new Date(this.getPublishedAt());
      return "" + (d.getMonth() + 1) + " - " + (d.getDate());
    },
    toJSON: function() {
      var hash;
      hash = Backbone.Model.prototype.toJSON.call(this);
      hash.published_at_pretty = this.getPublishedAtPretty();
      return hash;
    }
  });

  window.BlogPosts = Backbone.Collection.extend({
    url: "" + window.app.blog_domain + "posts.json",
    model: BlogPost
  });

}).call(this);
