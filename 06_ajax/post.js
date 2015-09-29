function sendFormData(event) {
  event.preventDefault();

  var username = $("#username").val();
  var color = $("#color").val();

  $.ajax({
    url:"http://leonbaird.co.uk/iphone/input.php",
    type:"post",
    data: {
      username: username,
      color: color
    },
    success: function(data) {
      console.log("Data received: ", data);
    },
    error: function(response, status, error) {
      console.log("Error "+error);
    }
  });
}

$("#dataForm").submit(sendFormData);
