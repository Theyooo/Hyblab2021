let initSlide2 = function(){

  d3.select('#boutonBegin').on('click', function(){
    mySlidr.slide('page-3');
    initSlide3();
  });

};