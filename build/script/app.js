(function() {
  $(document).ready(function() {
    return $('.main').pjax('a.pjax', '#pjax-container');
  });

  $(document).on('pjax:start', function() {
    return $('pjax-container').animate({
      opacity: 0
    }, 100);
  }).on('pjax:end', function() {
    return $('pjax-container').animate({
      opacity: 100
    }, 100);
  });

}).call(this);
