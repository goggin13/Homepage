describe("Blog", function() {
  it("has getters for title, and content", function() {
    var blog = new Blog({
      id: 1,
      title: "hello", 
      content: "world",
      publishedAt: "2014-11-19"
    });

    expect(blog.getId()).toBe(1);
    expect(blog.getTitle()).toBe("hello");
    expect(blog.getContent()).toBe("<p>world</p>");
    expect(blog.getPublishedAt()).toBe("2014-11-19");
  });

  describe("getContent", function () {
    it("converts the content from markdown to html", function () {
      var blog = new Blog({content: "# header\ncontent"});

      expect(blog.getContent()).toBe("<h1 id=\"header\">header</h1>\n\n<p>content</p>");
    });
  });

  describe("fetch", function () {
    it("loads a blog from a markdown file", function (done) {
      var blog = new Blog({id: "test"});
      blog.fetch().done(function () {
        expect(blog.getTitle()).toBe("This is a sample title");
        expect(blog.getPublishedAt()).toBe("2012-08-28");
        expect(blog.getContent()).toBe("<h1 id=\"sampleh1content\">Sample h1 content</h1>\n\n<p>sample p content.</p>");
        done();
      });
    });
  });

  describe("serialized", function () {
    it("has getters for title, and content", function() {
      var blog = new Blog({
        title: "hello", 
        content: "world",
        publishedAt: "2014-11-19"
      });

      var serialized = blog.serialized();
      expect(serialized.title).toBe("hello");
      expect(serialized.content).toBe("<p>world</p>");
      expect(serialized.publishedAt).toBe("2014-11-19");
    });
  });
});
