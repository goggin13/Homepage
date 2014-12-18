var Blog = Backbone.Model.extend({
  getTitle: function () {
    return this.get("title");
  },

  getId: function () {
    return this.get("id");
  },

  getContent: function () {
    this.showdown = this.showdown || new Showdown.converter();
    return this.showdown.makeHtml(this.get("content"));
  },

  getPublishedAtDate: function () {
    var rawPublishedAt = this.get("publishedAt");
    return new Date(rawPublishedAt);
  },

  getPublishedAt: function () {
    return this.getPublishedAtDate().toJSON().substring(0, 10);
  },

  serialized: function () {
    var serialized = _.clone(this.attributes);
    serialized.publishedAt = this.getPublishedAt();
    serialized.content = this.getContent();
    return serialized;
  },

  fetchFromFile: function () {
    var me = this;
    return $.ajax({
      url: window.rootPath + "blogs/" + this.getId() + ".md",
      method: "GET",
      success: function (rawBlog) {
        var blogLines = rawBlog.split("\n");
        me.set("title", blogLines[0]);
        me.set("publishedAt", blogLines[1]);
        me.set("content", blogLines.splice(2).join("\n"));
      },
    });
  },
  
  fetch: function () {
    var promise = $.Deferred();
    if (this.fetched) {
      promise.resolve();
      return promise;
    }

    this.fetchFromFile().done(function () {
      this.fetched = true;
      promise.resolve();
    });

    return promise;
  },
});

window.Blog = Blog;
