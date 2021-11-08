(function() {
    'use strict';
    console.log('reading js');

    const bodyTag = document.querySelector('body');

    document.getElementById('alien').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/alien.png")';
    });

    document.getElementById('pillow').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/coirm.png")';
    });

    document.getElementById('knob').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/pump.png")';
    });

    document.getElementById('alien').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/alien.png")';
    });

    document.getElementById('crystal').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/room.png")';
    });

    document.getElementById('spear').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/cave.png")';
    });

    document.getElementById('hat').addEventListener('click',function(event) {
        bodyTag.style.backgroundImage = 'url("/des157a/Assets/cherry.png")';
    });
})();