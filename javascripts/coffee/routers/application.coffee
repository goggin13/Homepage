
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
    
    show_view: (view) ->
      @transition_content ($box) ->
        $box.removeClass('loading')
            .html("")
            .append(view.render().el)
            .fadeIn()
      
    transition_content: (callback) ->
      $box = ($ '#box_content')
      $box.fadeOut (-> callback $box)
              
    show_loading: ->
      @transition_content ($box) ->
        $box.addClass('loading')
            .html('<img id="loading" src="images/loading.gif" alt="loading" />')
            .fadeIn()
    
    home: ->
      @show_view(new HomeView())
      
    about: ->
      @show_loading()
      console.log ("about")
      
    blog: ->ir 
      blogs = new BlogPosts()
      blogs.fetch().complete ->
        @show_view(new BlogView(collection: blogs))
    
    projects: ->
      console.log("projects")
    
    contact: ->
      @show_view(new ContactView())