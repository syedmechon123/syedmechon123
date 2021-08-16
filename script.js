//Script for Modal Form render
let modal = document.querySelector(".modal");
let btn = document.querySelector(".engage-btn");
let closeBtn = document.querySelector(".close");
btn.addEventListener("click", function () {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

//____________________________________________________

// Script for alert pop-up when modal form "submit" is clicked.
let submitForm = document.querySelector(".submit-form");
submitForm.addEventListener("click", function () {
  if (document.getElementById("modal-email").value == "") return false;
  if (document.getElementById("modal-name").value == "") return false;
  if (document.getElementById("modal-comment").value == "") return false;
  alert("Thanks for submission");
});

//______________________________________________________
