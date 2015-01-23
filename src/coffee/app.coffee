# pjax
$(document).ready ->
  $('.main').pjax 'a.pjax', '#pjax-container'

$(document).bind('pjax:complete', ->
  $('#pjax-container').animate( opacity: 0.0, 300)
  $('#pjax-container').animate( opacity: 1.0, 300)
)
