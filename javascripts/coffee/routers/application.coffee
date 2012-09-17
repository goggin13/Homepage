
jQuery ->

  window.ApplicationRouter = Backbone.Router.extend
    routes:
      '': 'blog'
      'index.html': 'blog'
      '/blog': 'blog'
      '/projects': 'projects'
      '/about': 'about'
      '/contact': 'contact'
    
    remove_apology: ->
      $apology = ($ '#heroku_apology')
      if $apology.is(':visible')
        $apology.text("thanks for waiting!!").fadeOut ->
          $apology.remove()
          
    show_view: (view, callback) ->  
      @remove_apology()
      @transition_content ($box) =>
        $box.removeClass('loading')
            .html("")
            .append(view.render().el)
            .fadeIn()
        callback() if callback
      
    transition_content: (callback) ->
      $box = ($ '#box_content')
      $box.fadeOut (-> callback $box)
    
    is_loading: -> ($ '.loading').is(':visible')
         
    show_loading: ->
      @transition_content ($box) ->
        $box.addClass('loading')
            .html('<img id="loading" src="images/loading.gif" alt="loading" />')
            .fadeIn()
    
    about: ->
      @show_view new AboutView()
    
    show_error: ->
      @show_view new ErrorView()
    
    check_long_load: ->
      if ($ '.loading').is(':visible')
        ($ '#heroku_apology').fadeIn()
    
    blog: ->
      @show_loading()
      blogs = new BlogPosts()
      view = new BlogsView(collection: blogs)
      
      setTimeout @check_long_load, 2000
      blogs.fetch()
        .then(=> @show_view view)
        .error(=> @show_error())
              
    projects: ->
      projects = new Projects()
      view = new ProjectsView(collection: projects)
      
      setTimeout @check_long_load, 2000
      projects.fetch()
        .then(=> @show_view view)
        .error(=> @show_error())
    
    contact: ->
      @show_view(new ContactView())