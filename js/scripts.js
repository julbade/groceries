$(document).ready(function(){

  var flavors = ["rockyroad","chocolate","strawberry","cookiesandcream"];

  flavors.forEach(function(flavor){
    $(".flavors").slideDown();
    $(".flavors ul").append('<li>' + flavor + '</li>');
  });

  var clickables = ["h1", "p", "ul"];
  clickables.forEach(function(clickable){
    $(clickable).click(function() {
      alert("this is a " + clickable + " element");
    });
  });

  // $("h1").click(function() {
  //   alert("h1");
  // });
  // $("p").click(function() {
  //   alert("p");
  // });
  // $("ul").click(function() {
  //   alert("ul");
  });
