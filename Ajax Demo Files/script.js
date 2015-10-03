// create event handlers
function sendFormData(event) {
    event.preventDefault();

    // collect form data
    var surname = $("#surname").val();
    var forename = $("#forename").val();
    var contact = $("#contact:checked").val() ? "checked" : "not-checked";

    // send to server
    $.ajax({
        url:"process.php",
        type:"post",
        dataType:"text",
        data: {
            userSurname: surname,
            userForename: forename,
            contactUser: contact
        },
        success: function(data) {
            $("#results").html("Data has been collected from the server!<br>"+data);
        },
        error: function(jqXHR, status, error) {
            $("#results").html("There has been a network error!<br>"+error);
        }
    });
}


// add event listener
$("form#userinfo").submit(sendFormData);