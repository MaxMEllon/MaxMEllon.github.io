(function() {
  $(document).ready(function() {
    return $('.main').pjax({
      link: 'a.pjax',
      area: '#pjax-container',
      callback: function() {
        return $('#pjax-container').css({
          left: 20
        }).animate({
          left: 0,
          opacity: 1
        }, 100);
      },
      callbacks: {
        before: function() {
          return $('#pjax-container').animate({
            left: -20,
            opacity: 0
          }, 100);
        }
      },
      ajax: {
        timeout: 3000
      },
      wait: 120
    });
  });

}).call(this);
