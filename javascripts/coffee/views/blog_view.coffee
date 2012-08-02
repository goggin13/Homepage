
window.BlogView = Backbone.View.extend
  template: _.template ($ '#tpl_blog_view').html()
  events: 
    'click .expand': 'expand'
  
  expand: ->
    @options.parent.expandMe @model
    console.log('expand')
  
  render: ->
    @$el.html (@template @model.toJSON())
    @


window.BlogsView = window.StaticView.extend
  template: _.template ($ '#tpl_blogs_view').html()
  title: "blog"
  
  expandMe: (model) ->
    @collection.each (post) ->
      post.set expanded: (post.getId() == model.getId())
    @render()
    
  render: ->
    @renderHeaderWithContent @template()
    $ul = @$el.find('ul')
    @collection.each (post) =>
      view = new BlogView model: post, parent: @
      $ul.append view.render().el
    @

window.BlogPageView = window.StaticView.extend
  template: _.template ($ '#tpl_blogs_view').html()