var cache = {};

var Template = {
  fetch: function (templateName) {
    if (cache[templateName]) {
      return cache[templateName];
    }

    $.ajax({
      url: window.rootPath + "javascripts/app/templates/" + templateName + ".tmpl",
      method: "GET",
      async: false,
      success: function (templateData) {
        cache[templateName] = _.template($.trim(templateData));
      }
    });

    return cache[templateName];
  }
};

window.Template = Template;
