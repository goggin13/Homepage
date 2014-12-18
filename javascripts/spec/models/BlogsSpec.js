describe("Blogs", function() {
  describe("fetch", function () {
    it("loads all blog from their markdown file", function (done) {
      var blog1 = new Blog({id: "test"});
      var blog2 = new Blog({id: "test1"});
      var blogs = new Blogs([blog1, blog2]);
      blogs.fetch().done(function () {
        expect(blog1.getTitle()).toBe("This is a sample title");
        expect(blog2.getTitle()).toBe("This is another sample title");
        done();
      });
    });
  });

  describe("order", function () {
    it("is sorted by date", function () {
      var blog1 = new Blog({id: "test2", publishedAt: "2014-12-02"});
      var blog2 = new Blog({id: "test1", publishedAt: "2014-12-01"});
      var blog3 = new Blog({id: "test3", publishedAt: "2014-12-03"});
      var blogs = new Blogs([blog1, blog2, blog3]);

      expect(blogs.at(0).getId()).toBe("test3")
      expect(blogs.at(1).getId()).toBe("test2")
      expect(blogs.at(2).getId()).toBe("test1")
    });

    it("is sorted by date and works across years", function () {
      var blog1 = new Blog({id: "test2", publishedAt: "2013-01-09"});
      var blog2 = new Blog({id: "test1", publishedAt: "2012-09-03"});
      var blog3 = new Blog({id: "test3", publishedAt: "2013-07-30"});
      var blogs = new Blogs([blog1, blog2, blog3]);

      expect(blogs.at(0).getId()).toBe("test3")
      expect(blogs.at(1).getId()).toBe("test2")
      expect(blogs.at(2).getId()).toBe("test1")
    });
  });
});
