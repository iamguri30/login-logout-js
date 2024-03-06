var username = localStorage.getItem("username");
// console.log(username);

function checkuser() {
  if (username) {
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
  } else {
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
}
checkuser();

// login
function sendData() {
  var getuser = document.getElementById("user").value;
  var getpwd = document.getElementById("pwd").value;

  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", getuser);
    username = getuser; // Update the username variable
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    alert("Login successful");
  }
}

// logout user
function logout() {
  localStorage.removeItem("username");
  document.getElementById("logout").style.display = "none";
  document.getElementById("login").style.display = "block";
  alert("Logout");
}

// add to cart
function addtocart() {
  console.log(username);
  if (username == null) {
    alert("login first");
  } else {
    alert("product added to cart");
  }
}
