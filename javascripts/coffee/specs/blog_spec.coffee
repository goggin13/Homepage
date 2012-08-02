
window.Fixtures = {}
window.Fixtures.blogs = {}
window.Fixtures.blogs.posts = [
  {"_id":"500a3e22bcd7ac5a94000001","content":"content1","title":"title1"},
  {"_id":"500a3e57bcd7ac9194000001","content":"content2","title":"title2"},
  {"_id":"501a9af18cec088c02000001","content":"content3","title":"title3"}
]

describe "Blogs", ->

  beforeEach ->
    @server = sinon.fakeServer.create()

  afterEach ->
    @server.restore()
    
  describe "BlogPosts", ->
    
    it "should return a collection of blogs", ->
      @server.respondWith(
        "GET", 
        "#{window.app.blog_domain}posts.json",
        [200, 
        {"Content-Type": "application/json"},
        JSON.stringify(Fixtures.blogs.posts)])
      
      fetched = false
      posts = new BlogPosts()
      posts.fetch().complete ->
        expect(posts.length).toEqual 3
        expect(posts.at(0).getTitle()).toEqual "title1"
        expect(posts.at(2).getTitle()).toEqual "title3"
        fetched = true
      
      @server.respond()
      
      waitsFor (-> fetched), "posts.fetch() to return", 500