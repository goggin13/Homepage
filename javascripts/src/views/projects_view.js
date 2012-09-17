(function() {

  window.ProjectsView = window.StaticView.extend({
    template: ($('#tpl_projects_view')).html(),
    title: "projects",
    render: function() {
      var _this = this;
      this.renderStaticView();
      this.collection.each(function(project) {
        var view;
        view = new ProjectView({
          model: project
        });
        return _this.$el.append(view.render().el);
      });
      this.$el.append("<div class='clear'></div>");
      return this;
    }
  });

  window.ProjectView = Backbone.View.extend({
    template: _.template(($('#tpl_project_view')).html()),
    converter: new Showdown.converter(),
    className: 'project',
    expanded: false,
    events: {
      'click': 'toggle'
    },
    toggle: function() {
      var width,
        _this = this;
      this.expanded = !this.expanded;
      width = this.expanded ? 700 : 300;
      if (this.expanded) {
        $('html, body').animate({
          scrollTop: this.$el.offset().top
        }, 500);
        this.$el.animate({
          width: width
        }, 'slow', function() {
          return _this.$('.description').fadeToggle();
        });
      } else {
        this.$('.description').fadeToggle('slow');
        this.$el.animate({
          width: width
        }, 'slow');
      }
      this.$el.toggleClass('expanded', this.expanded);
      return this.render();
    },
    render: function() {
      var data;
      data = this.model.toJSON();
      data.expanded = this.expanded;
      data.description = this.converter.makeHtml(data.description);
      this.$el.html(this.template(data));
      this.$('a').each(function(idx, a) {
        return ($(a)).attr('target', '_blank');
      });
      return this;
    }
  });

}).call(this);
