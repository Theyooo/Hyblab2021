var positions = ["",""]

async function adresses_autocompletion(adresse, num) {
    var lieu = 'https://api-adresse.data.gouv.fr/search/?q=' + adresse + '&limit=5&autocomplete=1';
    var input = document.getElementById("adresse" + num);
    var list = document.getElementById("adresses" + num);
    list.innerHTML = "";

    const response = await fetch(lieu)
    var resultAPI = await response.json();
    resultAPI.features.forEach((element) => {
        var button = document.createElement("button");
        button.innerHTML = element.properties.label;
        button.value = element.geometry.coordinates;
        button.classList.add("bouton_adresse");
        button.addEventListener("click", () => {
            input.value = button.innerHTML;
            positions[num - 1] = button.value;
            list.innerHTML = "";
        });
        list.appendChild(button);
    })
}

function adresses_validation() {
    if (positions[0] == "" || positions[1] == "") {
        console.log("saisir une adresse qui existe !");
    }
    else {
        const A1 = positions[0].split(',');
        const A2 = positions[1].split(',');
        go_to('criteres', {'positions': {
            adresse1: {longitude: A1[0], latitude: A1[1]},
            adresse2: {longitude: A2[0], latitude: A2[1]}
        }});
    }
}
