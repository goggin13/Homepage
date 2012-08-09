
window.BlogView = Backbone.View.extend
  template: _.template ($ '#tpl_blog_view').html()
  converter: new Showdown.converter()
  events: 
    'click .toggle': 'toggle'
  
  toggle: ->
    @options.expanded = !@options.expanded
    @render()
  
  render: ->
    data = @model.toJSON()
    data.content = @converter.makeHtml data.content
    data.expanded = @options.expanded
    @$el.html (@template data)
    @


window.BlogsView = window.StaticView.extend
  template: _.template ($ '#tpl_blogs_view').html()
  title: "blog"
      
  render: ->
    @renderHeaderWithContent @template()
    
    $ul = @$el.find('ul')
    first = true
    @collection.each (post) =>
      view = new BlogView model: post, expanded: first
      first = false
      $ul.append view.render().el
    @

window.BlogPageView = window.StaticView.extend
  template: _.template ($ '#tpl_blogs_view').html()