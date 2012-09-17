
window.ProjectsView = window.StaticView.extend
  template: ($ '#tpl_projects_view').html()
  title: "projects"
  
  render: ->
    @renderStaticView()
    @collection.each (project) =>
      view = new ProjectView(model: project)
      @$el.append view.render().el
    @$el.append "<div class='clear'></div>"
    @

window.ProjectView = Backbone.View.extend
  template: _.template ($ '#tpl_project_view').html()
  converter: new Showdown.converter()
  className: 'project'
  expanded: false
  events: 
    'click': 'toggle'

  toggle: ->
    @expanded = !@expanded
    width = if @expanded then 700 else 300
    
    if @expanded
      $('html, body').animate scrollTop: @$el.offset().top, 500
      @$el.animate width: width, 'slow', =>
        @$('.description').fadeToggle()
    else
      @$('.description').fadeToggle 'slow'
      @$el.animate width: width, 'slow'

    @$el.toggleClass('expanded', @expanded)
    @render()

  render: ->
    data = @model.toJSON()
    data.expanded = @expanded
    data.description = @converter.makeHtml data.description
    @$el.html (@template data)
    @$('a').each (idx, a) ->
      # no way to encode this in markdown, so this is nicer for now
      ($ a).attr('target', '_blank') 
    @