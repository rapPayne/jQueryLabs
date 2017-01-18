$(document).ready(function () {
  $('.answer').slideUp();
  $('h2').click(function () {
    $(this).next().slideToggle();
  });
});