
jQuery ->

  window.ApplicationRouter = Backbone.Router.extend
    routes:
      '': 'home'
      'index.html': 'home'
      '/blog': 'blog'
      '/index.html#blog': 'blog'
      '/#blog': 'blog'
      '#blog': 'blog'
      '/projects': 'projects'
      '/about': 'about'
      '/contact': 'contact'
  
    home: ->
      console.log ("home")

    about: ->
      console.log ("about")
  
    blog: ->
      console.log("blog")
    
    projects: ->
      console.log("projects")
    
    contact: ->
      console.log("contact")