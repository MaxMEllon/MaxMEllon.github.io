(function() {
  $(document).ready(function() {
    return $('.main').pjax('a.pjax', '#pjax-container');
  });

  $(document).bind('pjax:complete', function() {
    return $('#pjax-container').animate({
      opacity: 1.0
    }, 400);
  });

  $(document).bind('pjax:click', function() {
    return $('#pjax-container').animate({
      opacity: 0.0
    }, 0);
  });

}).call(this);
