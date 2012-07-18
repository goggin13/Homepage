(function() {

  window.StaticView = Backbone.View.extend({
    template: ($('#tpl_contact_view')).html(),
    title: "moar goggin on da interwebz",
    initialize: function() {
      return _.bindAll(this);
    },
    render: function() {
      ($(this.el)).html("<h1>" + this.title + "</h1><hr/>").append(Mustache.to_html(this.template));
      return this;
    }
  });

}).call(this);
