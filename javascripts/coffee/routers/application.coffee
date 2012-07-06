
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
    
    show_loading: ->
      ($ '#box1').addClass('loading')
                 .html '<img id="loading" src="images/loading.gif" alt="loading" />'
    
    hide_loading: ->
      ($ '#box1').removeClass('loading  ')
    
    home: ->
      console.log ("home")

    about: ->
      @show_loading()
      console.log ("about")
  
    blog: ->
      console.log("blog")
    
    projects: ->
      console.log("projects")
    
    contact: ->
      console.log("contact")