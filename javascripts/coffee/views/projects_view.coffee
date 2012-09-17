
window.ProjectsView = window.StaticView.extend
  template: ($ '#tpl_projects_view').html()
  title: "projects"
  id: 'project_list'
  
  render: ->
    @renderStaticView()
    $col0 = @$('#col_0')
    $col1 = @$('#col_1')
    @collection.each (project, index) =>
      view = new ProjectView(model: project)
      $target = if (index % 2 == 0) then $col0 else $col1
      $target.append view.render().el
        
    @$el.append "<div class='clear'></div>"
    @

window.ProjectView = Backbone.View.extend
  template: _.template ($ '#tpl_project_view').html()
  className: 'project'
  events: 
    'click': 'show_full'

  show_full: ->
    view = new window.ProjectFullView model: @model
    $('body').after view.render().el
    view.fade_in()
    
  render: ->
    @$el.html (@template @model.toJSON())
    @

window.ProjectFullView = Backbone.View.extend
  template: _.template ($ '#tpl_project_full_view').html()
  converter: new Showdown.converter()
  className: 'project expanded'
  # events: 
    # 'click': 'fade_out'

  initialize: ->
    _.bindAll @
  
  fade_out: ->
    @$el.fadeOut =>
      ($ 'body').removeClass 'faded'
      @remove()
  
  fade_in: ->
    ($ 'body').addClass 'faded'
    height = @$el.height() / 2 * -1
    @$el.css('margin-top', height)
    @$el.fadeIn =>
      ($ 'body').click =>
        @fade_out()
  
  render: ->
    data = @model.toJSON()
    data.description = @converter.makeHtml data.description
    @$el.html (@template data)
    @$('a').each (idx, a) ->
      # no way to encode this in markdown, so this is nicer for now
      ($ a).attr('target', '_blank') 
    @