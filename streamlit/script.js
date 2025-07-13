// script.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  } else {
    document.getElementById("loginError").innerText = "Invalid username or password.";
  }
});

document.getElementById("userToggle").addEventListener("click", function () {
  this.classList.toggle("active");
});

function logout() {
  document.getElementById("mainApp").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("loginError").innerText = "";
  document.getElementById("userToggle").classList.remove("active");
}

function showDashboard() {
  document.getElementById("dashboardSection").scrollIntoView({ behavior: "smooth" });
}
