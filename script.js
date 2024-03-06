var username = localStorage.getItem("username");

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

      var getuser = document.getElementById("user").value='';
      var getpwd = document.getElementById("pwd").value='';

    }
}

// logout user
function logout() {
    localStorage.removeItem("username");
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
    // username = '';
  alert("Logout");
}

// add to cart
function addtocart() {
  console.log(username);
  if (!localStorage.getItem("username")) {
    alert("login first");
  } else {
    alert("product added to cart");
  }
}
