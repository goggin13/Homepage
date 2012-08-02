

window.BlogPost = Backbone.Model.extend
  getId: -> @get '_id'
  getTitle: -> @get 'title'

window.BlogPosts = Backbone.Collection.extend
  url: "#{window.app.blog_domain}posts.json"
  model: BlogPost

  
