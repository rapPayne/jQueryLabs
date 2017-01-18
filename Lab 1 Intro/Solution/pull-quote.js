$('document').ready(function () {
  //console.log('in jQuery');
  $('.pq').each(function () {
    //alert($(this).text());
    var clone = $(this).clone()
      .removeClass('pq')
      .addClass('pullquote');
    $(this).before(clone);
  })
});