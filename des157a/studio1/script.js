(function() {
    'use strict';
    console.log('reading js');

    var myForm = document.querySelector('#myform');
    var madlib = document.querySelector('#madlib');
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var noun1 = document.querySelector('#noun1').value;
        var noun2 = document.querySelector('#noun2').value;
        var adj = document.querySelector('#adj').value;
        var verb = document.querySelector('#verb').value;

        var myText;

        if (noun1 && noun2 && adj && verb) {
            myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        } else {
            myText = 'Please enter all fields!'
        }
        madlib.innerHTML = myText;
    })
}());