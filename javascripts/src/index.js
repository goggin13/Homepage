(function() {

  ($(document)).ready(function() {
    var appCache, complete, f, navigateTo, router;
    ($('#cache span.dirty')).click(function() {
      return window.location.reload();
    });
    appCache = window.applicationCache;
    console.debug("appcache");
    f = function() {
      console.debug("downloading");
      return $("#cache").attr('class', 'updating');
    };
    appCache.addEventListener("downloading", f, false);
    f = function(progressEvent) {
      var percentage;
      console.debug("progress");
      percentage = progressEvent.loaded / progressEvent.total * 100;
      return $("#cache progress").val(percentage);
    };
    appCache.addEventListener("progress", f, false);
    complete = function(d) {
      console.debug("complete " + d);
      return $("#cache").attr('class', 'dirty');
    };
    appCache.addEventListener("cached", (function() {
      return complete(1);
    }), false);
    appCache.addEventListener("updateready", (function() {
      return complete(2);
    }), false);
    appCache.addEventListener("error", (function() {
      return complete(3);
    }), false);
    appCache.addEventListener("obsolete", (function() {
      return complete(4);
    }), false);
    router = new ApplicationRouter();
    Backbone.history.start();
    navigateTo = function(url) {
      return router.navigate(url, true);
    };
    return ($("a.push_nav")).live('click', function() {
      navigateTo(($(this)).attr('href'));
      return false;
    });
  });

}).call(this);
