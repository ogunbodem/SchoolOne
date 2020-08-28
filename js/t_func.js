
function t_myAccFunc() {
  var xButton = document.getElementById("t_demoAcc");
  if (xButton.className.indexOf("w3-show") == -1) {
    xButton.className += " w3-show";
    xButton.previousElementSibling.className += " w3-dark-grey";
  } else { 
    xButton.className = xButton.className.replace(" w3-show", "");
    xButton.previousElementSibling.className = 
    xButton.previousElementSibling.className.replace(" w3-dark-grey", "");
  }
}
     