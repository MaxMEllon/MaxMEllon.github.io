# pjax
$(document).ready ->
  $('.main').pjax 'a.nav-pjax', '#pjax-container'
  $('.main').pjax 'a.tool-manu-pjax', '.iframe#tool'

# $(document).bind 'pjax:complete', ->
#   $('#pjax-container').animate( opacity: 1.0, 400)
#
# $(document).bind 'pjax:click', ->
#   $('#pjax-container').animate( opacity: 0.0, 0)
