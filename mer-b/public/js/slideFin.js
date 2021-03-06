let initSlideFin = function(){

    d3.select('#goback').on('click', function(){
      mySlidr.slide('page-1');
      setActif(1);
      initSlide1();
      affichageReset();
      sketchCiel.resetSketchCiel();
      resetDisplay();
      var root = document.documentElement;
      root.style.setProperty('--breadcrumb-color', "#6e889b");
      root.style.setProperty('--bouton-texte-color', "#203443");
    });
  
    d3.select('#goback').on('mouseover', function(){
      
    });
  
    d3.select('#goback').on('mouseout', function(){
      
    });
  };

function getPlagesSlideFin(){
  getPlages();
  let loading = document.getElementById("loading");
  loading.innerHTML = `<img src="img/chargementecran.gif" />`;
  loading.innerHTML += `<h2>Un instant, nous cherchons la plage de vos rêves...</h2>`;
  loading.innerHTML += `</br><h3>Comment vos plages sont choisies ?</h3>`;
  loading.innerHTML += `</br><p>Pour trouver les plages, nous utilisons plusieurs base de données :`;
  loading.innerHTML += `1) <b>OpenStreetMap</b> qui recueille des informations sur les lieux`;
  loading.innerHTML += `</br>2) <b>OpenWeatherMap</b> qui recueille des informations sur la météo`;
  loading.innerHTML += `</br>3) <b>Nominatism</b> qui trouve l'adresse de la plage</p>`;
  loading.style.display = "block";

  let logo = document.getElementById("topLeftLogo");
  logo.src = "img/logo-bleu-clair.png";

  let cartesPostales = document.getElementsByClassName("cartesPostales")[0];
  cartesPostales.style.display = "none";
}

var cards = document.getElementsByClassName("cartePostale");
var playing = false;

/*
for(let card of cards){
  card.addEventListener('click',function() {
    if(playing)
      return;
    
    playing = true;
    anime({
      targets: card,
      scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
      rotate: {value: '+=0', delay: 0},
      easing: 'easeInOutSine',
      duration: 400,
      complete: function(anim){
         playing = false;
      }
    });
  });
}
*/

function updateSlideFin(plages, criteres){
  let loading = document.getElementById("loading");
  loading.style.display = "none";
  let cartesPostales = document.getElementsByClassName("cartesPostales")[0];
  cartesPostales.style.display = "block";

  let cartesPostalesList = document.getElementsByClassName("cartePostaleContainer");
  plages.forEach((element, index) => {

    cartesPostalesList[index].style.display = "inline-block";

    let cartePostale = document.getElementById("cp" + (index + 1));

    let imgPlage = cartePostale.querySelector(".imgCarte");
    imgPlage.style.backgroundImage = "url('"+ element.photo + "')";
	
    let nomPlage = cartePostale.querySelector(".nomPlage");
    if(element.nom){
      element.nom = element.nom.replaceAll("_", " ");
    }
    nomPlage.innerHTML = element.nom;
	
	let nomVille = cartePostale.querySelector(".nomVille");
	if(element.adresse.commune){
		element.adresse.commune = element.adresse.commune.replaceAll("_", " ");
	}
	nomVille.innerHTML = element.adresse.commune;
    let temperature = cartePostale.querySelector(".temperatureRelle");
    temperature.innerHTML = element.weather.temperature + '°C';
    let leverSoleil = cartePostale.querySelector(".leverSoleil");

    let dateLever = new Date(element.weather.sunrise);
    if(dateLever.getMinutes() < 10){
      leverSoleil.innerHTML = new Date(element.weather.sunrise).getHours() + ":0" + new Date(element.weather.sunrise).getMinutes();
    }
    else {
      leverSoleil.innerHTML = new Date(element.weather.sunrise).getHours() + ":" + new Date(element.weather.sunrise).getMinutes();
    }

    let coucherSoleil = cartePostale.querySelector(".coucherSoleil");
    let datecoucher = new Date(element.weather.sunset);
    if(datecoucher.getMinutes() < 10){
      coucherSoleil.innerHTML = new Date(element.weather.sunset).getHours() + ":0" + new Date(element.weather.sunset).getMinutes();
    }
    else {
      coucherSoleil.innerHTML = new Date(element.weather.sunset).getHours() + ":" + new Date(element.weather.sunset).getMinutes();
    }

    let date = cartePostale.querySelector("#date");
    if((new Date(element.time).getMonth() + 1)<10){
      date.innerHTML = new Date(element.time).getDate() + '/0' + (new Date(element.time).getMonth() + 1);
    }
    else {
      date.innerHTML = new Date(element.time).getDate() + '/' + (new Date(element.time).getMonth() + 1);
    }

    let heure = cartePostale.querySelector("#heure");
    if(new Date(element.time).getMinutes() < 10){
      heure.innerHTML = new Date(element.time).getHours() + ":0" + new Date(element.time).getMinutes();
    }
    else {
      heure.innerHTML = new Date(element.time).getHours() + ":" + new Date(element.time).getMinutes();
    }

    if(element.phare){
      let phare = cartePostale.querySelector(".phareNom");
      phare.innerHTML = element.phare.name;
    }

    let itineraire = cartePostale.querySelector(".itineraire");
    itineraire.setAttribute("href", "https://www.google.com/maps/dir/" + getAffichage().latitude + ",+" + getAffichage().longitude + " /" + element.latitude + "," + element.longitude + "/")
  });

  if (plages.length === 2) {
    let carte1 = document.getElementById("cp1");
    let carte2 = document.getElementById("cp2");
    carte1.style.marginTop = "-60px";
    carte2.style.marginTop = "-45px";
  }
  if (plages.length === 1) {
    let carte1 = document.getElementById("cp1");
    carte1.style.marginTop = "-60px";
    carte1.style.transform = "rotate(1.8deg)";
  }
}

function updateSlideFinNotFound(){
  let loading = document.getElementById("loading");
  loading.innerHTML = "<h2>Désolé, nous n'avons pas trouvé de plage correspondant à vos critères ! <br /> Essayez avec une nouvelle adresse ou d'autres critères.</h2>";
}

let boutonCredit = document.getElementById("boutonCredit");
boutonCredit.addEventListener("click", function(){
  let credits = document.getElementsByClassName("credits")[0];
  credits.style.display = "block";
});

let closeCredit = document.getElementById("closeCredit");
closeCredit.addEventListener("click", function(){
  let credits = document.getElementsByClassName("credits")[0];
  credits.style.display = "none";
});