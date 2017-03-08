var checkBirthDate = function(month, year, minAge){
    var currentDate = new Date();
    var bDate = new Date(parseInt(year)+parseInt(minAge), month);
    var cDate = new Date(parseInt(currentDate.getFullYear()), parseInt(currentDate.getMonth())+1);

    if(bDate.getTime() < cDate.getTime()) {
        return true; }
    else {
        return false; }
}
function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}
