$(function () {
  //this code will be executed on document ready
  loadData();
  $("#loadData").on("click", loadData);
});
function loadData() {
  console.log("Starting Data Load");
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/products",
    method: "GET",
    success: dataReceived,
  });
  console.log("Request Sent");
}

function dataReceived(response) {
  console.log("Data Received");
  console.log(response);
  $("#products").empty();
  for (var i = 0; i < response.length; i++) {
    $("#products").append(
      "<div><h1>" +
        response[i].name +
        "</h1><p>" +
        response[i].description +
        "</p></div>"
    );
  }
}
