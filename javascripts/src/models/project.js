(function() {

  window.Project = Backbone.Model.extend({
    getId: function() {
      return this.get('_id');
    },
    getName: function() {
      return this.get('name');
    }
  });

  window.Projects = Backbone.Collection.extend({
    url: "" + window.app.blog_domain + "projects.json",
    model: Project
  });

}).call(this);
