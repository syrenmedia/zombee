$(document).ready(function() {
  $(".module h2").click(function() {
    $(this).parent().find("ul").toggle("slow");
    $(this).parent().find("hr").toggle("slow");
    $(this).parent().find(".arrow").toggleClass("fa-angle-double-down");
  });
  $("a").click(function() {
    $(this).attr('target', '_new');
  });
});

