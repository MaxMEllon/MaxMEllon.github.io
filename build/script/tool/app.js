(function() {
  $("input[name=radio]").change(function() {
    if ($("input[name=radio]:checked").val() === "normal") {
      $("#rof").hide;
    }
    if ($("input[name=radio]:checked").val() === "auto") {
      return $("#rof").show;
    }
  });

  $(".btn").click(function() {});

}).call(this);
