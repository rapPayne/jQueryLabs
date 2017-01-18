$(function () {
  $('#getMovie').click(function () {
    var title = $('#movieTitle').val();
    var url = "http://omdbapi.com/?t=" + title;
    $.ajax({
      method: "GET",
      url: url
    }).then(function (res) {
      var html = "<table><tbody>";
      for (var k in res)
        html += "<tr><td>" + k + "</td><td>" + res[k] + "</td></tr>";
      html += "</tbody></table>";
      $('.movieData').html(html);
      console.log(res, html);
    }, function (error) {
      console.error("Error!", error);
    });
  });
});