document.body.addEventListener('keydown', function(event) { parseKeyDown(event) } );

var validKeys = ['a','s','d','f','g','h','j','k','l'];

function parseKeyDown(e) {
    var key = e.key;
    if (validKeys.includes(key)) {
        document.getElementById('drum-' + key).play();
    }
}





