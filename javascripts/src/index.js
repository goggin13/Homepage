(function() {

  $.xhrPool = [];

  $.xhrPool.abortAll = function() {
    var request, _results;
    _results = [];
    while ((request = this.pop())) {
      _results.push(request.abort());
    }
    return _results;
  };

  $.ajaxSetup({
    beforeSend: function(jqXHR) {
      return $.xhrPool.push(jqXHR);
    }
  });

  ($(document)).ready(function() {
    var navigateTo, router;
    router = new ApplicationRouter();
    Backbone.history.start();
    navigateTo = function(url) {
      $.xhrPool.abortAll();
      return router.navigate(url, true);
    };
    return ($("a.push_nav")).live('click', function() {
      navigateTo(($(this)).attr('href'));
      return false;
    });
  });

}).call(this);
