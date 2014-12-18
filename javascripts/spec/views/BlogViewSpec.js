describe("BlogView", function() {
  it("renders a blog with the title and date", function () {
    var blog = new Blog({title: "hello", publishedAt: "2014-11-19", content: ""});
    var blogView = new BlogView({model: blog});
    blogView.render();

    expect(blogView.$el.find("h2").text()).toBe("2014-11-19 | hello");
  });

  it("toggles the content", function () {
    var blog = new Blog({title: "title", publishedAt: "2014-11-19", content: "hello world"});
    var blogView = new BlogView({model: blog});
    blogView.render();

    expect(blogView.$el.text()).not.toMatch(/.*hello world.*/)
    expect(blogView.$el.find(".toggle.expand").length).toBe(1);
    expect(blogView.$el.find(".toggle.collapse").length).toBe(0);

    blogView.$el.find(".toggle").click();

    expect(blogView.$el.text()).toMatch(/.*hello world.*/)
    expect(blogView.$el.find(".toggle.expand").length).toBe(0);
    expect(blogView.$el.find(".toggle.collapse").length).toBe(2);
  });

  it("adds target=_blank to links", function () {
    var blog = new Blog({
      title: "title",
      content: "hello world [link-text](http://www.google.com)", 
      publishedAt: "2014-11-19"
    });
    var blogView = new BlogView({model: blog});
    blogView.render().toggle();

    expect(blogView.$el.find("a").attr("target")).toBe("_blank");
  });
});
