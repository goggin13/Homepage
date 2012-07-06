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
      show_loading: function() {
        return ($('#box1')).addClass('loading').html('<img id="loading" src="images/loading.gif" alt="loading" />');
      },
      hide_loading: function() {
        return ($('#box1')).removeClass('loading  ');
      },
      home: function() {
        return console.log("home");
      },
      about: function() {
        this.show_loading();
        return console.log("about");
      },
      blog: function() {
        return console.log("blog");
      },
      projects: function() {
        return console.log("projects");
      },
      contact: function() {
        return console.log("contact");
      }
    });
  });

}).call(this);
