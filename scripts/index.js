function todayDate(id) {
    let now = new Date();

    let annee = now.getFullYear();
    let mois = now.getMonth() + 1;
    let jour = now.getDate();
    let heure = now.getHours();
    let minute = now.getMinutes();
    let seconde = now.getSeconds();

    let today = document.getElementById(id);
    return today.innerHTML = 'Vous consultez cette page le ' + jour + '/' + mois + '/' + annee;
}

todayDate("today");


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

