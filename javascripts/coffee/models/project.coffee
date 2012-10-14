

window.Project = Backbone.Model.extend
  getId: -> @get '_id'
  getName: -> @get 'name'
  
  
window.Projects = Backbone.Collection.extend
  url: "#{window.app.blog_domain}projects.json?callback=?"
  model: Project

  
