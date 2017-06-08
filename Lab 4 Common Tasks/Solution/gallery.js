    $(document).ready(function() {

      $('#gallery img').each(function(i) {
        var imgFile = $(this).attr('src');
        var preloadImage = new Image();
        var imgExt = /(\.\w{3,4}$)/;
        preloadImage.src = imgFile.replace(imgExt, '_h$1');

        $(this).hover(
          function() {
            $(this).prop('src', preloadImage.src);
          },
          function() {
            var currentSource = $(this).attr('src');
            $(this).prop('src', imgFile);
          }); // end hover
      }); // end each

      //insert new programming below this line
      $('#gallery a').click(function (e) {
        e.preventDefault();
        var newImagePath = $(this).prop('href');
        $('#photo').fadeOut(function () {
          $('#photo').html('<img src="'+newImagePath+'" />')
          $('#photo').fadeIn();
        });
      });

      $('#gallery a:first').click();
    }); // end ready