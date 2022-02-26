function navigate() {
  var x = document.getElementById("bar");
  if (x.className === "navbar") {
    x.className += " response";
  } else {
    x.className = "navbar";
  }
}