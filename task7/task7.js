function toggle_paragraph() {
    var paragraph = document.getElementById("paragraph");
    var button = document.querySelector("button");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      button.textContent = "Hide";
    } else {
      paragraph.style.display = "none";
      button.textContent = "Show";
    }
  }