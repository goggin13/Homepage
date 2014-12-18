var AboutView = Backbone.View.extend({
  template: Template.fetch("About"),
  id: "about",

  render: function () {
    var html = this.template({});
    this.$el.html(html);

    return this;
  }
});

window.AboutView = AboutView;
