
$(document).ready(function() {

  var inputs = [];

  $("#addList").click(function() {
    var listInput = $("input#grocery").val();
    if (listInput) {
      inputs.push(listInput);
      $("#initialList").text(inputs);
    } else {
      alert("Please enter valid item.");
    }
  })

  $("#inputBox").submit(function(event) {
    $("#inputBox").slideUp();
    inputs.sort();
    inputs.forEach(function(input) {
      upperInput = input.toUpperCase();
      $("ul").append("<li>" + upperInput + "</li>")
    })

    event.preventDefault();
  })
})
