document.body.addEventListener('keydown', function(event) { playSound(event) } );
var drumKeys = document.querySelectorAll('.drum');
drumKeys.forEach(key => key.addEventListener('transitionend', removeTransition));

var validKeys = ['a','s','d','f','g','h','j','k','l'];

function removeTransition(e) {
    this.classList.remove('playing');
}

function playSound(e) {
    var key = e.key;
    if (validKeys.includes(key)) {
        var sound = document.getElementById('drum-' + key);
        sound.currentTime = 0;
        sound.play();
        var div = document.getElementById(key);
        div.classList.add('playing');
    }
}





