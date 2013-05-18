
window.BlogView = Backbone.View.extend
  template: _.template ($ '#tpl_blog_view').html()
  converter: new Showdown.converter()
  className: 'post'
  events: 
    'click .toggle': 'toggle'
  
  toggle: ->
    @options.expanded = !@options.expanded
    if @options.expanded
      window.navigateTo "#/blog/#{@model.getId()}", true
    else
      window.navigateTo "#/blog", true
    @render()
  
  hide: ->
    @options.expanded = false
    @render()

  scroll_to: ->
    $('html, body').animate(scrollTop: @$el.offset().top, 500);
    
  render: ->
    data = @model.toJSON()
    console.log(data)
    data.content = @converter.makeHtml data.content
    data.expanded = @options.expanded
    @$el.html (@template data)
    @$('a').each (idx, a) ->
      # no way to encode this in markdown, so this is nicer for now
      ($ a).attr('target', '_blank')    
    @


window.BlogsView = window.StaticView.extend
  template: _.template ($ '#tpl_blogs_view').html()
  title: "blog"
  
  initialize: ->
    _.bindAll @
    @views = {}
  
  toggle_post: (id) -> 
    _.each @views, (v) => v.hide()
    @views[id].toggle()
    @views[id].scroll_to()
  
  render: ->
    @renderHeaderWithContent @template()
    
    $div = @$el.find('.posts')
    first = true
    @collection.each (post) =>
      @views[post.getId()] = new BlogView model: post, expanded: first
      first = false
      $div.append @views[post.getId()].render().el
    @

window.BlogPageView = window.StaticView.extend
  template: _.template ($ '#tpl_blogs_view').html()