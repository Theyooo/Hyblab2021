let initResults = function(){

    d3.select('.logoAccueil7').on('click', function (){
        mySlidr.slide('home-page');
        initHome();
    });

    d3.select('.button-next-results').on('click', function (){
        mySlidr.slide('home-page');
        initHome();
    });
};