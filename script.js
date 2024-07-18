function darkmode() {
  document.getElementById("darkmode").style.backgroundColor = "#2c2e30";
  document.getElementById("darkmode").style.color = "white";
  document.getElementById("darkmodetextcard1").style.color = "black";
  document.getElementById("darkmodetextcard2").style.color = "black";
  document.getElementById("darkmodetextcard3").style.color = "black";
  document.getElementById("darkmode").style.fontWeight = "normal";
}

function darkmodeoff() {
  document.getElementById("darkmode").style.backgroundColor = "white";
  document.getElementById("darkmode").style.color = "black";
  document.getElementById("darkmode").style.fontWeight = "normal";
}
function downloadresume() {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1JpaHkbmEtFYj9Fq9BKpUsnBddPwdps3i/view?usp=drive_link";
  link.download = "Rushi Reddy Lambu.pdf";
  link.click();
}
function Aboutsection() {
  document
    .getElementById("Aboutsection")
    .addEventListener("click", function () {
      document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
    });
}
function Myprojectssection() {
  document
    .getElementById("Myprojectssection")
    .addEventListener("click", function () {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    });
}
function Contactmesection() {
  document
    .getElementById("Contactmesection")
    .addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
}
