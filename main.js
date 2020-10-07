const topButton = document.getElementById("topBtn");
const toggleButton = document.getElementById("toggleBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function toTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
