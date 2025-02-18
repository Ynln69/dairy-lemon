document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    document.getElementById("successMessage").style.display = "block"; // Показує повідомлення
    this.reset();
  });
