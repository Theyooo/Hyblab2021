let initSearchingResults = function() {

    muteAll();
    setTimeout(function() {
        mySlidr.slide('down');
        initResults();
    }, 4000);


    // ----------- AUDIO --------------
    let buttonVol = document.getElementById("volumeResult2");
    document.getElementById('activities_audio').pause();

    if (isSonOn) {
        document.getElementById('result1_audio').play();
        document.getElementById('result1_audio').loop = false;
        document.getElementById('result1_audio').volume = 0.15;

    }
    else buttonVol.setAttribute("src", "./img/common/volume_off.svg");


    d3.selectAll('.volume').on('click', function() {
        if (isSonOn) {
            this.setAttribute("src", "./img/common/volume_off.svg");
            isSonOn = Boolean(false);
            document.getElementById('result1_audio').pause();
        } else {
            this.setAttribute("src", "./img/common/volume_on.svg");
            isSonOn = Boolean(true);
            document.getElementById('result1_audio').play();
        }
    });

};
