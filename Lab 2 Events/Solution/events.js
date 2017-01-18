$(document).ready(function () {
  $(document).dblclick(function () {
    console.log("hello world");
  });
  $('a').mouseover(function () {
    var message = "<p>You moused over a link</p>";
    $('.main').append(message);
  });
  $('#button').click(function () {
    $(this).text('You clicked me!');
  });
  $('input').focus(function () {
    $(this).css('background-color','red');
  });
});