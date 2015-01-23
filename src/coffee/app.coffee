# pjax
$(document).ready ->
  $('.main').pjax 'a.pjax', '#pjax-container'

$(document).bind('pjax:complete', ->
  $('#pjax-container').animate( opacity: 1.0, 400)
)
$(document).bind('pjax:click', ->
  $('#pjax-container').animate( opacity: 0.0, 0)
)
