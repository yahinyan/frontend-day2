document
  .getElementById("email_form")
  .addEventListener("submit", function (event) {
    const email_input = document.getElementById("email");
    const email_value = email_input.value.trim();
    if (email_value === "") {
      alert("Please enter an email address");
      event.preventDefault();
    }
  });
