(function() {

  window.ProjectsView = window.StaticView.extend({
    template: ($('#tpl_projects_view')).html(),
    title: "projects",
    id: 'project_list',
    render: function() {
      var $col0, $col1,
        _this = this;
      this.renderStaticView();
      $col0 = this.$('#col_0');
      $col1 = this.$('#col_1');
      this.collection.each(function(project, index) {
        var $target, view;
        view = new ProjectView({
          model: project
        });
        $target = index % 2 === 0 ? $col0 : $col1;
        return $target.append(view.render().el);
      });
      this.$el.append("<div class='clear'></div>");
      return this;
    }
  });

  window.ProjectView = Backbone.View.extend({
    template: _.template(($('#tpl_project_view')).html()),
    className: 'project',
    events: {
      'click': 'show_full'
    },
    show_full: function() {
      var view;
      view = new window.ProjectFullView({
        model: this.model
      });
      $('body').after(view.render().el);
      return view.fade_in();
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  window.ProjectFullView = Backbone.View.extend({
    template: _.template(($('#tpl_project_full_view')).html()),
    converter: new Showdown.converter(),
    className: 'project expanded',
    initialize: function() {
      return _.bindAll(this);
    },
    fade_out: function() {
      var _this = this;
      return this.$el.fadeOut(function() {
        ($('body')).removeClass('faded');
        return _this.remove();
      });
    },
    fade_in: function() {
      var height,
        _this = this;
      ($('body')).addClass('faded');
      height = this.$el.height() / 2 * -1;
      this.$el.css('margin-top', height);
      return this.$el.fadeIn(function() {
        return ($('body')).click(function() {
          return _this.fade_out();
        });
      });
    },
    render: function() {
      var data;
      data = this.model.toJSON();
      data.description = this.converter.makeHtml(data.description);
      this.$el.html(this.template(data));
      this.$('a').each(function(idx, a) {
        return ($(a)).attr('target', '_blank');
      });
      return this;
    }
  });

}).call(this);
