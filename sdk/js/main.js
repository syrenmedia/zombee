$(document).ready(function() {
  $(".module h2").click(function() {
    $(this).parent().find("ul").toggle("slow");
    $(this).parent().find("hr").toggle("slow");
    $(this).parent().find(".fa").toggleClass("fa-angle-double-down");
  });
});

