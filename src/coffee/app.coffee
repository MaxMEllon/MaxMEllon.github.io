#pjax
$(document).ready ->
  $('.main').pjax 'a.pjax', '#pjax-container'

$(document)
  .on 'pjax:start', ->
    $('pjax-container').animate(
      opacity: 0
    , 100)
  .on 'pjax:end', ->
    $('pjax-container').animate(
      opacity: 100
    , 100)

