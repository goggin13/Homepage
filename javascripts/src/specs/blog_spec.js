(function() {

  window.Fixtures = {};

  window.Fixtures.blogs = {};

  window.Fixtures.blogs.posts = [
    {
      "_id": "500a3e22bcd7ac5a94000001",
      "content": "content1",
      "title": "title1"
    }, {
      "_id": "500a3e57bcd7ac9194000001",
      "content": "content2",
      "title": "title2"
    }, {
      "_id": "501a9af18cec088c02000001",
      "content": "content3",
      "title": "title3"
    }
  ];

  describe("Blogs", function() {
    beforeEach(function() {
      return this.server = sinon.fakeServer.create();
    });
    afterEach(function() {
      return this.server.restore();
    });
    return describe("BlogPosts", function() {
      return it("should return a collection of blogs", function() {
        var fetched, posts;
        this.server.respondWith("GET", "" + window.app.blog_domain + "posts.json", [
          200, {
            "Content-Type": "application/json"
          }, JSON.stringify(Fixtures.blogs.posts)
        ]);
        fetched = false;
        posts = new BlogPosts();
        posts.fetch().complete(function() {
          expect(posts.length).toEqual(3);
          expect(posts.at(0).getTitle()).toEqual("title1");
          expect(posts.at(2).getTitle()).toEqual("title3");
          return fetched = true;
        });
        this.server.respond();
        return waitsFor((function() {
          return fetched;
        }), "posts.fetch() to return", 500);
      });
    });
  });

}).call(this);
