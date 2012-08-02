(function() {

  jQuery(function() {
    return window.ApplicationRouter = Backbone.Router.extend({
      routes: {
        '': 'home',
        'index.html': 'home',
        '/blog': 'blog',
        '/index.html#blog': 'blog',
        '/#blog': 'blog',
        '#blog': 'blog',
        '/projects': 'projects',
        '/about': 'about',
        '/contact': 'contact'
      },
      show_view: function(view) {
        return this.transition_content(function($box) {
          return $box.removeClass('loading').html("").append(view.render().el).fadeIn();
        });
      },
      transition_content: function(callback) {
        var $box;
        $box = $('#box_content');
        return $box.fadeOut((function() {
          return callback($box);
        }));
      },
      show_loading: function() {
        return this.transition_content(function($box) {
          return $box.addClass('loading').html('<img id="loading" src="images/loading.gif" alt="loading" />').fadeIn();
        });
      },
      home: function() {
        return this.show_view(new HomeView());
      },
      about: function() {
        this.show_loading();
        return console.log("about");
      },
      blog: function() {
        var blogs,
          _this = this;
        this.show_loading();
        blogs = new BlogPosts();
        return blogs.fetch().complete(function() {
          return _this.show_view(new BlogsView({
            collection: blogs
          }));
        });
      },
      projects: function() {
        return console.log("projects");
      },
      contact: function() {
        return this.show_view(new ContactView());
      }
    });
  });

}).call(this);
