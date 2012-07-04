
($ document).ready ->
  router = new ApplicationRouter()
  Backbone.history.start()
  
  navigateTo = (url) -> 
    router.navigate url, true
    
  ($ "a.push_nav").live 'click', ->
    navigateTo ($ this).attr('href')
    false