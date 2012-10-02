

window.BlogPost = Backbone.Model.extend
  getId: -> @get '_id'
  getTitle: -> @get 'title'
  getPublishedAt: -> @get 'published_at'
  getPublishedAtPretty: ->
    d = new Date @getPublishedAt()
    "#{d.getMonth() + 1} - #{d.getDate()}"
  
  toJSON: ->
    hash = Backbone.Model.prototype.toJSON.call @
    hash.published_at_pretty = @getPublishedAtPretty()
    hash
    
  
window.BlogPosts = Backbone.Collection.extend
  url: "#{window.app.blog_domain}posts.json"
  model: BlogPost
  
  parse: (json) ->
    json
  
