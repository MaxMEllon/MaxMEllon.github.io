(function() {
  $(document).ready(function() {
    return $('.main').pjax('a.pjax', '#pjax-container');
  });

  $(document).bind('click', 'a.pjax', function() {
    $('#pjax-container').animate({
      opacity: 0.0
    }, 300);
    return $('#pjax-container').animate({
      opacity: 1.0
    }, 300);
  });

}).call(this);
