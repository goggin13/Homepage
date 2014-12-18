var LinksView = Backbone.View.extend({
  template: Template.fetch("Links"),

  render: function () {
    var html = this.template({});
    this.$el.html(html);

    return this;
  }
});

window.LinksView = LinksView;
