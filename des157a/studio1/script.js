(function() {
    'use strict';
    console.log('reading js');

    let myForm = document.querySelector('main');
    let madlib = document.getElementById('overlay');
    let inputList = ['Name of the monster','Name of the weapon','Name of your trusty companion']
    let convoList = ['Hey, you!','Yeah, you! I need your help!','Could you help me finish this story?',"Fantastic, so I'll ask you a few words and answer them as you wish!",'Well here is your finished piece sire!']
    let wordList = new Array(4);
    var labelVal = document.querySelector('label');   
    var inputField = document.getElementById("word");     
    var windex = 0;
    var ilindex = 0;
    madlib.style.visibility = "hidden";
    myForm.addEventListener('submit', function(event) {
            inputField.style.visibility = "0.01";
            event.preventDefault();
            var inputVal = document.querySelector('#word').value;
            labelVal.textContent = inputList[ilindex]
            if (windex<wordList.length)
            {
                wordList[windex] = inputVal;
                console.log(wordList[windex])
                windex++;
            }
            ilindex++;

        if (ilindex>inputList.length)
        {
            myForm.style.visibility = "hidden";
            madlib.style.visibility = "visible";
            madlib.innerHTML+= `<p>Let me tell you the story of ${wordList[0]} the fearless <br/>
            A short-statured paladin nonetheless</p><br/><p>Instructed by the Emperor to slay ${wordList[1]} the warlock <br/>
            Unperturbed, ${wordList[0]} left towards his lair at the shout of the human clock</p><br/><p>'Twas a glorious battle, of blood, sweat and tears <br/>
            Brandishing the holy ${wordList[2]}, amidst their companions' cheers
            </p><br/><p>In a fit of rage, ${wordList[1]} attacked ${wordList[3]}, ${wordList[0]}'s closest companion <br/>
            A last-ditch attempt to get back at the paladin, nearly sending their companion to oblivion</p><br/><p>But${wordList[0]} intervened just in the nick of time,<br/>
            And the attack to finish ${wordList[2]} was just sublime</p><br/><p>The paladin changed their name to Julius Caeser <br/>
            Well, I wish, ${wordList[1]} later succumbed to hayfever</p>`;
            madlib.style.fontFamily = "Galeo"
        }
            
    })
}());