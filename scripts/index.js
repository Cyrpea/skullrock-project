















const textCopy = document.getElementById("benoitmail");

textCopy.onclick = function() {
  document.execCommand("copy");
  alert("Vous avez copié le texte.");
};

textCopy.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", textCopy.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});