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