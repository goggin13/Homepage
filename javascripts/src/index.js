(function() {

  ($(document)).ready(function() {
    var navigateTo, router;
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
