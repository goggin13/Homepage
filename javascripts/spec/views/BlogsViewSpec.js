describe("BlogsView", function() {
  it("displays all the blogs, expanding only the first", function () {
    var blog1 = new Blog({title: "the first title", publishedAt: "2014-11-19", content: "hello world"});
    var blog2 = new Blog({title: "the second title", publishedAt: "2014-11-19", content: "goodbye world"});
    var blogs = new Blogs([blog1, blog2]);
    var blogsView = new BlogsView({collection: blogs});
    blogsView.render();

    var html = blogsView.$el.html();
    expect(html).toMatch(/.*the first title.*/)
    expect(html).toMatch(/.*the second title.*/)

    expect(html).toMatch(/.*hello world.*/)
    expect(html).not.toMatch(/.*goodbye world.*/)
  });
});
