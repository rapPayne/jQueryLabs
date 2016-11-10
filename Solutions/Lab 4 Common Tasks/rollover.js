$(function () {
  $('#gallery img').each(function () {
    var oldImagePath = $(this).prop('src');
    var newImagePath = oldImagePath.replace(/(\w+).jpg/,'$1_h.jpg');
    var newImg = new Image();
    newImg.src = newImagePath;
    $(this).hover(function () {
      $(this).prop('src',newImagePath);
    }, function () {
      $(this).prop('src',oldImagePath);
    });
  });
});