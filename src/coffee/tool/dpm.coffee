
$("input[name=radio]").change ->
  $("#rof").hide if $("input[name=radio]:checked").val() is "normal"
  $("#rof").show if $("input[name=radio]:checked").val() is "auto"

$(".btn").click ->
  
