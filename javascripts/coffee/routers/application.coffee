
jQuery ->

  window.ApplicationRouter = Backbone.Router.extend
    routes:
      '': 'blog'
      'index.html': 'blog'
      '/blog': 'blog'
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
    
    about: ->
      @show_view new AboutView()
    
    show_error: ->
      @show_view new ErrorView()
    
    blog: ->
      @show_loading()
      blogs = new BlogPosts()
      blogs.fetch()
           .then(=>
             @show_view new BlogsView(collection: blogs))
           .error => @show_error()
              
    projects: ->
      @show_view new ProjectsView()
    
    contact: ->
      @show_view(new ContactView())