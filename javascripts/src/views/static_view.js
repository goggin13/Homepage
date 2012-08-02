(function() {

  window.StaticView = Backbone.View.extend({
    template: ($('#tpl_contact_view')).html(),
    title: "moar goggin on da interwebz",
    initialize: function() {
      return _.bindAll(this);
    },
    renderHeaderWithContent: function(content) {
      ($(this.el)).html("<h1>" + this.title + "</h1><hr/>").append(content);
      return this;
    },
    renderStaticView: function() {
      return this.renderHeaderWithContent(Mustache.to_html(this.template));
    },
    render: function() {
      this.renderStaticView();
      return this;
    }
  });

}).call(this);
