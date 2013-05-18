

window.BlogPost = Backbone.Model.extend
  getId: -> @get '_id'
  getTitle: -> @get 'title'
  getPublishedAt: -> @get 'published'
  getPublishedAtPretty: ->
    d = new Date @getPublishedAt()
    "#{d.getMonth() + 1} - #{d.getDate()}"
  
  toJSON: ->
    hash = Backbone.Model.prototype.toJSON.call @
    hash.published_at_pretty = @getPublishedAtPretty()
    hash
  
  parse: (json) -> json.post
  
window.BlogPosts = Backbone.Collection.extend
  url: "#{window.app.blog_domain}posts.json?callback=?"
  model: BlogPost