// event handler
function downloadUsers(event) {
    event.preventDefault();

    $.ajax({
        url: "userdata.json",
        type: "get",
        dataType: "json",
        success: function(data) {
            console.log("Data downloaded:", data);
            processDownloadedData(data);
        },
        error: function(jqXHR, status, error) {
            $("#results").html("There has been a network error!<br>"+error);
        }
    });

}

function processDownloadedData(data) {
    var users = data.users;
    var list = $("<ul />");
    for(var i in users) {
        var user = users[i];
        list.append(
            $("<li />").html("ID: "+user.id+",<br>Username: "+user.name+",<br>address: "+user.address)
        );
    }
    $("#results").empty().append(list);
}

// add event listener to button
$("#getData").click(downloadUsers);

