let initHour = function(){
    
    d3.select('.logoAccueil2').on('click', function (){
        mySlidr.slide('home-page');
        initHome();
    });

    d3.select(".button-suivant-hour").on("click", function (){
        mySlidr.slide('right');
        initAge();
    });

    //Bouton Suivant
    let tl_suivant_hour_over = anime.timeline({
        easing: 'linear',
        loop:true
    });

    d3.select('.button-suivant-hour').on('mouseover', function (){
        tl_suivant_hour_over
            .add({
                targets: ".button-suivant-hour",
                scale: 1.1,
                duration: 500
            })
            .add({
                targets: ".button-suivant-hour",
                scale: 0.9,
                duration: 500
            })
            .add({
                targets: ".button-suivant-hour",
                scale: 1,
                duration: 500
            })
    });

    d3.select('.button-suivant-hour').on('mouseleave' ,function (){
        anime({
            targets: ".button-suivant-hour",
            scale: 1,
            duration: 200,
            ease: 'linear'
        });
        tl_suivant_hour_over.pause();
    });

    var s = null;
    var rayon = null;
    var bigCircle = null;
    var polygon = null;
    var discs = null;
    var bigCircle2 = null;

    function createSlider () {
        s = Snap("#svg-slider");
        rayon = document.querySelector("#svg-slider").clientWidth * 0.5;
        console.log(rayon);

        bigCircle = s.circle(rayon, rayon, rayon);
        bigCircle.attr({
            fill: "#45396D",
        });

        polygon = s.polygon(rayon, 0, 0, 0, 0, 2*rayon, rayon, 2*rayon);
        polygon.attr({
            fill: "#FFCDB6"
        });

        discs = s.group(bigCircle, polygon);
        bigCircle2 = s.circle(rayon, rayon, rayon);

        bigCircle2.attr({
            fill: "#fff"
        });

        discs.attr({
            mask: bigCircle2
        });
    }

    function calculX(dX,dY){
        let a = ((2*rayon-dY)/(rayon-dX));
        let b = dY - a*dX;
        return(-b/a);
    }

    function calculY(dX,dY,x){
        let a = ((2*rayon-dY)/(rayon-dX));
        let b = dY - a*dX;
        return(a*x+b)
    }

    window.addEventListener('resize', function (event){
        createSlider();
    })

    document.querySelector("#svg-slider").addEventListener('click', function(event) {
        let screenX=document.querySelector("#slidr").clientWidth;
        let screenY=document.querySelector("#slidr").clientHeight;

        let width = window.innerWidth;
        let height = window.innerHeight;

        let dX = event.pageX - screenX*0.36 - ((width - screenX)/2);
        let dY = event.pageY - screenY*0.56 - ((height-screenY)/2);

        document.querySelector("#svg-slider").innerHTML = "";
        let bigCircle = s.circle(rayon, rayon, rayon);
        bigCircle.attr({
            fill: "#45396D",
        });

        let violet = document.querySelectorAll(".violet");
        for(let v of violet){
            v.style.opacity = '0';
        }

        // Ajouter valeur myCriteria
        if (dY < rayon && dX < rayon && ((dX-dY) >= 0)){
            updateHour(1);
            document.querySelector(".hour-aprem.violet").style.opacity = '1';
        }

        else if (dY < rayon && dX >= rayon && ((dX+dY) < 2*rayon)){
            updateHour(1);
            document.querySelector(".hour-aprem.violet").style.opacity = '1';
        }

        else if (dY >= rayon && dX >= rayon || dY < rayon && dX >= rayon && ((dX+dY) >= 2*rayon) ){
            updateHour(2);
            document.querySelector(".hour-17.violet").style.opacity = '1';
        }

        else if(dY >= rayon && dX < rayon || dY < rayon && dX < rayon && ((dX-dY) < 0) ) {
            updateHour(0);
            document.querySelector(".hour-9.violet").style.opacity = '1';
        }

        // Ajuster le polygone en fonction du click
        let nvX = calculX(dX, dY);
        if(dX < rayon && ((dY-2*dX) < 0)){
            polygon = s.polygon(nvX,0 , 0,0 , 0,2*rayon , rayon,2*rayon);
        }

        if(dX >= rayon && ((dY+2*dX) < 4*rayon)){
            polygon = s.polygon(nvX,0 , 0,0 , 0,2*rayon , rayon,2*rayon);
        }

        if(dX >= rayon && ((dY+2*dX) >= 4*rayon)){
            let nvY = calculY(dX,dY,2*rayon);
            polygon = s.polygon(2*rayon,nvY , 2*rayon,0 , 0,0, 0,2*rayon , rayon,2*rayon);
        }

        if(dX < rayon && ((dY-2*dX) >= 0)) {
            let nvY = calculY(dX,dY,0);
            polygon = s.polygon(0,nvY , 0,2*rayon , rayon,2*rayon);
        }

        discs = s.group(bigCircle, polygon);
        polygon.attr({
            fill: "#FFCDB6"
        });
        discs.attr({
            mask: bigCircle2
        });
    });
    createSlider();
};
