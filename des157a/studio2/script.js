(function() {
    'use strict';
    console.log('reading js');

    const htmlTag = document.querySelector('html');
    const bodyTag = document.querySelector('body');
    const btn = document.querySelector('button');

    document.getElementById('alien').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/alien.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    document.getElementById('pillow').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/coirm.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    document.getElementById('knob').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/pump.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    document.getElementById('alien').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/alien.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    document.getElementById('crystal').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/room.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    document.getElementById('spear').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/cave.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    document.getElementById('hat').addEventListener('click',function(event) {
        htmlTag.style.backgroundImage = 'url("/des157a/Assets/cherry.png")';
        htmlTag.style.backgroundRepeat = 'no-repeat';
        callRevertButton();
    });

    function callRevertButton() {
        bodyTag.innerHTML += "<button id='return'>Return</button>";
        document.getElementById("return").addEventListener('click',function(){
            location.reload();
        });
    }
})();