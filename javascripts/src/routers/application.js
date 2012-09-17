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
      remove_apology: function() {
        var $apology;
        $apology = $('#heroku_apology');
        if ($apology.is(':visible')) {
          return $apology.text("thanks for waiting!!").fadeOut(function() {
            return $apology.remove();
          });
        }
      },
      show_view: function(view, callback) {
        var _this = this;
        this.remove_apology();
        return this.transition_content(function($box) {
          $box.removeClass('loading').html("").append(view.render().el).fadeIn();
          if (callback) return callback();
        });
      },
      transition_content: function(callback) {
        var $box;
        $box = $('#box_content');
        return $box.fadeOut((function() {
          return callback($box);
        }));
      },
      is_loading: function() {
        return ($('.loading')).is(':visible');
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
      check_long_load: function() {
        if (($('.loading')).is(':visible')) return ($('#heroku_apology')).fadeIn();
      },
      blog: function() {
        var blogs, view,
          _this = this;
        this.show_loading();
        blogs = new BlogPosts();
        view = new BlogsView({
          collection: blogs
        });
        setTimeout(this.check_long_load, 2000);
        return blogs.fetch().then(function() {
          return _this.show_view(view);
        }).error(function() {
          return _this.show_error();
        });
      },
      projects: function() {
        var projects, view,
          _this = this;
        projects = new Projects();
        view = new ProjectsView({
          collection: projects
        });
        setTimeout(this.check_long_load, 2000);
        return projects.fetch().then(function() {
          return _this.show_view(view);
        }).error(function() {
          return _this.show_error();
        });
      },
      contact: function() {
        return this.show_view(new ContactView());
      }
    });
  });

}).call(this);
