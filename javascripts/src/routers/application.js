(function() {

  jQuery(function() {
    return window.ApplicationRouter = Backbone.Router.extend({
      routes: {
        '': 'blog',
        'index.html': 'blog',
        '/blog': 'blog',
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
      about: function() {
        return this.show_view(new AboutView());
      },
      show_error: function() {
        return this.show_view(new ErrorView());
      },
      blog: function() {
        var blogs,
          _this = this;
        this.show_loading();
        blogs = new BlogPosts();
        return blogs.fetch().then(function() {
          return _this.show_view(new BlogsView({
            collection: blogs
          }));
        }).error(function() {
          return _this.show_error();
        });
      },
      projects: function() {
        return this.show_view(new ProjectsView());
      },
      contact: function() {
        return this.show_view(new ContactView());
      }
    });
  });

}).call(this);
