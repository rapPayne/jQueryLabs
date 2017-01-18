$(function () {
  $('#dashboard').hover(function () {
    $(this).animate({'left': 0});
  }, function () {
    $(this).animate({'left': -92});    
  });
})