let initHome = function(){

    //-----------AUDIO--------------
    //Doit mettre les audio de n'importe quelle page en pause
    muteAll();

    //Le premier son doit avoir un listener
    function musicPlay() {
        document.getElementById('debut_audio').play();
        document.getElementById('debut_audio').loop = false;
        document.getElementById('debut_audio').volume = 0.1;
        document.removeEventListener('click', musicPlay);
    }

    let buttonVol = document.getElementById("volumeDebut");
    buttonVol.setAttribute("src", "./img/common/volume_on.svg");


    d3.selectAll('#volumeDebut').on('click', function() {
        if (isSonOn) {
            this.setAttribute("src", "./img/common/volume_off.svg");
            isSonOn = Boolean(false);
            document.getElementById('debut_audio').pause();
        } else {
            this.setAttribute("src", "./img/common/volume_on.svg");
            isSonOn = Boolean(true);
            document.getElementById('debut_audio').play();
        }
    });


    // ------------------ SLIDING & ANIMATIONS -----------------
    // Sliding vers la page more-info
    $(".more-info").on("click", function() {
        muteAll();
        mySlidr.slide('up');
        initMoreInfo();
    });


    // Animation des comètes
    let tl_shooting_stars = anime.timeline({
        easing: 'linear',
        loop: true,
    });


    tl_shooting_stars
        .add({
            targets: ".shooting-stars",
            translateX: "-=850%",
            translateY: "+=550%",
            duration: 3000,
        })
        .add({
            targets: ".shooting-stars",
            opacity: 0,
            duration: 10
        })
        .add({
            delay: 4000,
        });

    // Animation de la fusée lors du click sur le bouton "Go"
    var tl_begin_over = anime.timeline({
        easing: 'linear',
        loop:true
    });


    d3.select(".button-histoire").on("click", function() {
        muteAll();
        mySlidr.slide('histoire-page');
        setTimeout(function() {
            initHistoire();
        }, 1200);
    });


    d3.select('.button-begin').on('mouseover', function() {
        tl_begin_over
            .add({
                targets: ".button-begin",
                scale: 1.3,
                duration: 500
            })
            .add({
                targets: ".button-begin",
                scale: 0.8,
                duration: 500
            })
            .add({
                targets: ".button-begin",
                scale: 1,
                duration: 500
            });
    });


    d3.select('.button-begin').on('mouseleave', function() {
        anime({
            targets: ".button-begin",
            scale: 1,
            duration: 200,
            ease: 'linear'
        });
        tl_begin_over.pause();
    });

    d3.select('.button-begin').on('click', function() {
        if (isSonOn) musicPlay();
        document.getElementById('button-begin').disabled = true;
        document.getElementById('button-histoire').disabled = true;
        document.getElementById('more-info').disabled = true;
        document.getElementById('button-histoire').hidden = true;


        let tl_begin = anime.timeline({
            easing: 'easeOutCubic'
        });


        tl_begin
            .add({
                targets: ".button-begin",
                opacity: 0,
                duration: 300
            })
            .add({
                targets: ".catch-phrase",
                opacity: 0,
                offset: "-=300",
                duration: 300
            })
            .add({
                targets: ".talking-bubble-home",
                opacity: 1,
                duration: 500,
                easing: "linear"
            })
            .add({
                targets: ".oya-home-go",
                opacity: 1,
                duration: 500,
                offset: "-=800",
                easing: "linear"
            })
            .add({
                delay: 3500
            })
            .add({
                targets: ".talking-bubble-home",
                opacity: 0,
                duration: 500,
                easing: "linear"
            })
            .add({
                targets: ".oya-home-go",
                opacity: 0,
                duration: 500,
                offset: "-=500",
                easing: "linear"
            })
            .add({
                targets: ".oya-hello",
                translateX: '80%',
                scale: 0.6,
                duration: 500,
            })
            .add({
                targets: ".rocket-hello",
                scale: 0.1,
                duration: 50
            })
            .add({
                targets: ".rocket-hello",
                opacity: 1,
                duration: 300,
            })
            .add({
                targets: ".rocket-hello",
                scale: 1,
                duration: 500,
            })
            .add({
                targets: ".rocket-hello",
                translateY: '40%',
                duration: 750,
                easing:"easeOutCirc"
            })
            .add({
                targets: ".oya-hello",
                translateX: "60%",
                scale: 0.6,
            })
            .add({
                targets: ".oya-hello",
                translateX: "10%",
                scale: 0,
                duration: 750,
            })
            .add({
                targets: ".rocket-hello",
                translateY: "-150%",
                duration: 500,
            })
            .finished.then(() => {
            anime({
                targets: ".button-begin",
                scale: 1,
                duration: 50,
                ease: 'linear'
            });
            tl_begin_over.pause();
            mySlidr.slide('down');
            setTimeout(function() {
                initAddress();
            }, 1200);
        });
    });
};


// Reset la page lorsqu'on revient sur la page home
let resetHome = function() {
    document.getElementById('button-begin').disabled = false;
    document.getElementById('button-histoire').disabled = false;
    document.getElementById('more-info').disabled = false;
    document.getElementById('button-histoire').hidden = false;


    d3.select('.oya-hello')
        .style("transform", "");


    d3.select('.rocket-hello')
        .style("transform", "")
        .style("opacity", 0);


    d3.select('.button-begin')
        .style("transform", "")
        .style("opacity", 1);


    d3.select('.catch-phrase')
        .style("transform", "")
        .style("opacity", 1);

};
