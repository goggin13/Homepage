
window.AboutView = window.StaticView.extend
  template: ($ '#tpl_about_view').html()
  title: "about"
  id: 'about'
  events: 
    'mouseover img': 'toggleCalvin'
    'mouseout img': 'toggleGoggin'
  
  image: ->
    @img ||= @$('img')
  
  toggleCalvin: ->
    @image().attr('src', 'images/calvin_and_hobbes.png')
  
  toggleGoggin: ->
    @image().attr('src', 'images/headshot.png')
