$(document).ready(function() {
  $(".module").click(function() {
    $(this).find("ul").toggle("slow");
    $(this).find("hr").toggle("slow");
    $(this).find(".fa").toggleClass("fa-angle-double-down");
  });
});

