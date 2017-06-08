$(function () {
  $('#getLocation').click(function () {
    var ip = $('#ipAddress').val();
    var url = "http://ip-api.com/json/" + ip;
    $.ajax({
      method: "GET",
      url: url
    }).then(function (res) {
      var html = "<table><tbody>";
      for (var k in res)
        html += "<tr><td>" + k + "</td><td>" + res[k] + "</td></tr>";
      html += "</tbody></table>";
      $('.outputDiv').html(html);
      console.log(res, html);
    }, function (error) {
      console.error("Error!", error);
    });
  });
});