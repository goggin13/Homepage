
window.StaticView = Backbone.View.extend
  template: ($ '#tpl_contact_view').html()
  title: "moar goggin on da interwebz"

  initialize: ->
    _.bindAll @
  
  renderHeaderWithContent: (content) ->
    ($ @el).html("<h1>#{@title}</h1><hr/>")
           .append(content)
    @
    
  renderStaticView: ->
    @renderHeaderWithContent (Mustache.to_html @template)
  
  render: ->
    @renderStaticView()
    @
