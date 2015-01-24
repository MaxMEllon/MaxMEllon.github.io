(function() {
  $(document).ready(function() {
    $('.main').pjax('a.nav-pjax', '#pjax-container');
    return $('.main').pjax('a.tool-manu-pjax', '.iframe#tool');
  });

}).call(this);
