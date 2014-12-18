var BlogView = Backbone.View.extend({
  template: Template.fetch("Blog"),
  className: "post",

  events: {
    'click .toggle': 'toggle'
  },

  toggle: function () {
    this.expanded = !this.expanded;
    this.render();

    return this;
  },

  render: function () {
    var viewData = this.model.serialized();
    viewData.expanded = this.expanded;
    var html = this.template(viewData);
    this.$el.html(html);
    this.$("a").each(function (idx, a) {
      $(a).attr("target", "_blank");
    });

    return this;
  }
});

window.BlogView = BlogView;
