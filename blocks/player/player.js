window.onload = function() {


    var video = document.getElementById("mainVideo");
    var wrapper = document.getElementById("playerWrapper");
    var playButton = document.getElementById("play");
    var playTime = document.getElementById("playTime");

    //Переводчик секунд в минуты
    function format(s) {
        m = Math.floor(s / 60);
        m = (m >= 10) ? m : "0" + m;
        s = Math.floor(s % 60);
        s = (s >= 10) ? s : "0" + s;
        return m + ":" + s;
    }

    //Вывод длительности видео
    playTime.innerHTML = format(video.duration);

    //Обработчик нажатия кнопки Play
    playButton.addEventListener("click", function() {
        document.getElementById('playerWrapper').classList.remove('player__wrapper_status_visible');
        document.getElementById('playerWrapper').classList.add('player__wrapper_status_hidden');
        video.play();
    });

}




