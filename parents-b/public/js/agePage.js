const BEBE = 2;
const PETIT = 4.5;
const MOYEN = 7.5;
const GRAND = 10.5;

let initAge = function() {

    // -------------- AUDIO -----------
    muteAll();


    let buttonVol = document.getElementById("volumeAge");
    buttonVol.setAttribute("src", "./img/common/volume_on.svg");


    if (isSonOn) {
        document.getElementById('age_audio').play();
        document.getElementById('age_audio').loop = false;
        document.getElementById('age_audio').volume = 0.15;
    }
    else buttonVol.setAttribute("src", "./img/common/volume_off.svg");


    d3.selectAll('#volumeAge').on('click', function() {
        if (isSonOn) {
            this.setAttribute("src", "./img/common/volume_off.svg");
            isSonOn = Boolean(false);
            document.getElementById('age_audio').pause();
        } else {
            this.setAttribute("src", "./img/common/volume_on.svg");
            isSonOn = Boolean(true);
            document.getElementById('age_audio').play();
        }
    });


    // -------------- HEADER -------------
    d3.select('.logoAccueil3').on('click', function() {
        muteAll();
        mySlidr.slide('home-page');
        resetHome();
        setTimeout(function() {
            initHome();
        }, 1200);
    });


    // --------------- FONCTIONS -----------------
    // Pour avoir l'image du jeu adéquat avec fleche
    function setImage(cpt) {

        let valeurImage = cpt%4;

        if (valeurImage === 0 ) {
            x.setAttribute("src", "./img/age_page/agebb.svg");
        }
        if (valeurImage === 1 || valeurImage === -1) {
            x.setAttribute("src", "./img/age_page/agenounours.svg");
        }
        if (valeurImage === 2 || valeurImage === -2) {
            x.setAttribute("src", "./img/age_page/agelego.svg");
        }
        if (valeurImage === 3 || valeurImage === -3) {
            x.setAttribute("src", "./img/age_page/ageballon.svg");
        }
    }

    //Pour afficher le logo et les croix de suppression lors d'un choix avec le bouton plus
    function activeLogoChoix(cpt) {
        valeurImage = cpt%4;
        if (valeurImage === 0) {
            document.getElementById("bb").hidden = false;
            document.getElementById("supp_bb").hidden = false;
            addAge(BEBE);
        }
        if (valeurImage === 1 || valeurImage === -1) {
            document.getElementById("nounours").hidden = false;
            document.getElementById("supp_nounours").hidden = false;
            addAge(PETIT);
        }
        if (valeurImage === 2 || valeurImage === -2) {
            document.getElementById("lego").hidden = false;
            document.getElementById("supp_lego").hidden = false;
            addAge(MOYEN);
        }
        if (valeurImage === 3 || valeurImage === -3) {
            document.getElementById("ballon").hidden = false;
            document.getElementById("supp_ballon").hidden = false;
            addAge(GRAND);
        }
    }

    let cpt = 0;

    // --------------- DES L'OUVERTURE -----------------
    let x = document.getElementById("image_age");
    x.setAttribute("src", "./img/age_page/agebb.svg");


    // --------------- BOUTONS -----------------
    // Bouton suivant
    d3.select('.button-suivant-age').on('click', function() {
        tl_suivant_age_over.pause();
        mySlidr.slide('right');
        initAccess();
    });


    // Gestion des fleches pour changement image
    // Récupère l'image et modifie la source en fonction du résultat de la division euclidienne
    d3.select(".fleche_gauche").on("click", function() {
        cpt = cpt-1;
        if (cpt <0) cpt = 3;
        setImage(cpt);
    });

    // Mouse over de fleche gauche
    d3.select(".fleche_gauche").on("mouseover",  function() {
        var x = document.getElementById("fleche_gauche");
        x.setAttribute("src", "./img/age_page/fleche_gauche.svg");
    });

    d3.select(".fleche_gauche").on("mouseleave",  function() {
        var x = document.getElementById("fleche_gauche");
        x.setAttribute("src", "./img/age_page/flecheG.svg");
    });

    d3.select(".fleche_gauche").on("click", function() {
        cpt = cpt - 1;
        if (cpt < 0) cpt = 3;
        setImage(cpt);
    });

    //Mouse over de fleche gauche
    d3.select(".fleche_gauche").on("mouseover",  function() {
        var x = document.getElementById("fleche_gauche");
        x.setAttribute("src", "././img/age_page/fleche_gauche.svg");
    });

    d3.select(".fleche_gauche").on("mouseleave",  function() {
        var x = document.getElementById("fleche_gauche");
        x.setAttribute("src", "././img/age_page/flecheG.svg");
    });


    d3.select(".fleche_droite").on("click",  function() {
        cpt = cpt + 1;
        setImage(cpt);
    });

    //Mouse over de fleche droite
    d3.select(".fleche_droite").on("mouseover",  function() {
        var x = document.getElementById("fleche_droite");
        x.setAttribute("src", "./img/age_page/fleche_droite.svg");
    });

    d3.select(".fleche_droite").on("mouseleave",  function() {
        var x = document.getElementById("fleche_droite");
        x.setAttribute("src", "./img/age_page/flecheD.svg");
    });

    //Mouse over de fleche droite
    d3.select(".fleche_droite").on("mouseover",  function() {
        var x = document.getElementById("fleche_droite");
        x.setAttribute("src", "././img/age_page/fleche_droite.svg");
    });

    d3.select(".fleche_droite").on("mouseleave",  function() {
        var x = document.getElementById("fleche_droite");
        x.setAttribute("src", "././img/age_page/flecheD.svg");
    });


    //Bouton plus
    d3.select(".button_add").on("click",  function() {
        activeLogoChoix(cpt);
    });


    //Cache les logo si le bouton plus est activé
    d3.select(".supp_bb").on("click",  function() {
        document.getElementById("bb").hidden = true;
        document.getElementById("supp_bb").hidden = true;
        removeAge(BEBE);
    });


    d3.select(".supp_nounours").on("click",  function() {
        document.getElementById("nounours").hidden = true;
        document.getElementById("supp_nounours").hidden = true;
        removeAge(PETIT);
    });


    d3.select(".supp_lego").on("click",  function() {
        document.getElementById("lego").hidden = true;
        document.getElementById("supp_lego").hidden = true;
        removeAge(MOYEN);
    });


    d3.select(".supp_ballon").on("click",  function() {
        document.getElementById("ballon").hidden = true;
        document.getElementById("supp_ballon").hidden = true;
        removeAge(GRAND);
    });


    // ---------- ANIMATIONS ---------------
    // Premier robot
    anime({
        targets: '.age_yeux_cache',
        translateY: '170%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay : 2000,
        duration: 1500,
        loop: false
    });

    anime({
        targets: '.age_yeux_cache',
        opacity: 0,
        delay : 3500,
        loop: false
    });

    anime({
        targets: '.age_yeux_cache2',
        delay : 1250,
        opacity: 0,
        duration: 1000
    });

    anime({
        targets: '.age_yeux_cache2',
        translateY: '1000%',
        delay : 2000
    });


    // Deuxieme robot
    anime({
        targets: '#age_arrive',
        translateY: '-350%',
        delay : 1500,
        duration: 5000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false
    });

    let txt2 = anime.timeline({
        targets: '.txt2'
    });
    txt2
        .add({
            delay : 7500,
            opacity: 1,
            duration: 1000
        });


    // Animation bouton "Suivant"
    let tl_suivant_age_over = anime.timeline({
        easing: 'linear',
        loop:true
    });

    d3.select('.button-suivant-age').on('mouseover', function() {
        tl_suivant_age_over
            .add({
                targets: ".button-suivant-age",
                scale: 1.1,
                duration: 500
            })
            .add({
                targets: ".button-suivant-age",
                scale: 0.9,
                duration: 500
            })
            .add({
                targets: ".button-suivant-age",
                scale: 1,
                duration: 500
            })
    });

    d3.select('.button-suivant-age').on('mouseleave', function() {
        anime({
            targets: ".button-suivant-age",
            scale: 1,
            duration: 200,
            ease: 'linear'
        });
        tl_suivant_age_over.pause();
    });

    d3.select(".ariane-1-age").on('click', function() {
        muteAll();
        mySlidr.slide('left');
        setTimeout(function() {
            mySlidr.slide('left');
        }, 1500);
        setTimeout(function() {
            initAddress();
        }, 2700);
    });


    d3.select(".ariane-2-age").on('click', function() {
        muteAll();
        mySlidr.slide('left');
        setTimeout(function() {
            initHour();
        }, 1200);
    });


    d3.select(".ariane-4-age").on('click', function() {
        muteAll();
        mySlidr.slide('right');
        setTimeout(function() {
            initAccess();
        }, 1200);
    });


    d3.select(".ariane-5-age").on('click', function() {
        muteAll();
        mySlidr.slide('right');
        setTimeout(function() {
            mySlidr.slide('up');
        }, 1500);
        setTimeout(function() {
            initFaunaFlora();
        }, 2700);
    });


    d3.select(".ariane-6-age").on('click', function() {
        muteAll();
        mySlidr.slide('right');
        setTimeout(function() {
            mySlidr.slide('up');
        }, 1500);
        setTimeout(function() {
            mySlidr.slide('right');
        }, 3000);
        setTimeout(function() {
            initActivities();
        }, 4200);
    });
};
