

($ document).ready ->

  # ($ '#cache span.dirty').click -> window.location.reload()
  # 
  # appCache = window.applicationCache
  # 
  # f = ->
  #   console.debug "downloading"
  #   $("#cache").attr('class', 'updating')
  #   
  # appCache.addEventListener "downloading", f, false
  # 
  # f = (progressEvent) ->
  #   console.debug "progress"
  #   percentage = progressEvent.loaded / progressEvent.total * 100
  #   $("#cache progress").val(percentage)
  #   
  # appCache.addEventListener "progress", f, false
  # 
  # complete = (d) -> 
  #   console.debug("complete #{d}")
  #   $("#cache").attr('class', 'dirty')
  # 
  # appCache.addEventListener "cached", (-> complete(1)), false
  # appCache.addEventListener "updateready", (-> complete(2)), false
  # appCache.addEventListener "error", (-> complete(3)), false
  # appCache.addEventListener "obsolete", (-> complete(4)), false
  
  router = new ApplicationRouter()
  Backbone.history.start()
  
  navigateTo = (url) -> 
    router.navigate url, true
    
  ($ "a.push_nav").live 'click', ->
    navigateTo ($ this).attr('href')
    false