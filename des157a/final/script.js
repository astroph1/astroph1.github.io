(function() {
    'use strict';
    console.log('reading js');

    const bodyTag = document.querySelector('body');
    let convo = document.getElementById('conver');
    let convoBtn = document.getElementById('next');
    let myForm = document.getElementById('form');
    let madlib = document.getElementById('overlay');
    let inputList = ['Name of the monster','Name of the weapon','Name of your trusty companion']
    let convoList = ['Yeah, you! I need your help!','Could you help me finish this story?',"Fantastic, so I'll ask you a few words and answer them as you wish!",'Well here is your finished piece sire!']
    const convoPos = [['655px','82px',''],[],[],[]]
    let wordList = new Array(4);   
    var inputField = document.getElementById("word");     
    var windex = 0;
    var ilindex = 0;
    let cindex = 0;
    madlib.style.visibility = "hidden";
    const preloader = document.getElementById('preloader');
	preloader.className = 'fadeout';

    preloader.addEventListener('animationend', function () {
        
		preloader.style.display = 'none';
	});

    convoBtn.addEventListener('click',function(){
       if (cindex<convoList.length) 
        convo.innerHTML = `${convoList[cindex]}`;
        cindex++;
        if (convoList[cindex] === convoList[5]) {
            myForm.innerHTML = `<form id="myform">
            <label for="word">Name of the hero</label>
            <br />
            <input type="text" id="word" required>
            <input type="submit" value="Ok" id="okay">
            </form>`;
            myForm.style.top = "206px";
            myForm.style.left = "784px";
        }
    });

    myForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var labelVal = document.querySelector('label');
            var input = document.querySelector('#word');
            var inputVal = document.querySelector('#word').value;
            labelVal.textContent = inputList[ilindex]
            if (windex<wordList.length)
            {
                wordList[windex] = inputVal;
                console.log(wordList[windex])
                input.value = '';
                windex++;
            }
            ilindex++;

        if (ilindex>inputList.length)
        {
            myForm.style.visibility = "hidden";
            madlib.style.visibility = "visible";
            madlib.innerHTML+= `<button id="close">X</button><p>Let me tell you the story of <b>${wordList[0]}</b> the fearless <br/>
            A short-statured paladin nonetheless</p><p>Instructed by the Emperor to slay <b>${wordList[1]}</b> the warlock <br/>
            Unperturbed, <b>${wordList[0]}</b> left towards his lair at the shout of the human clock</p><br/><p>'Twas a glorious battle, of blood, sweat and tears <br/>
            Brandishing the holy <b>${wordList[2]}</b>, amidst their companions' cheers
            </p><br/><p>In a fit of rage, <b>${wordList[1]}</b> attacked <b>${wordList[3]}</b>, <b>${wordList[0]}</b>'s closest companion <br/>
            A last-ditch attempt to get back at the paladin, nearly sending their companion to oblivion</p><br/><p>But <b>${wordList[0]}</b> intervened just in the nick of time,<br/>
            And the attack to finish <b>${wordList[2]}</b> was just sublime</p><br/><p>The paladin changed their name to Julius Caeser <br/>
            Well, I wish, <b>${wordList[1]}</b> later succumbed to hayfever</p>`;
            bodyTag.style.cssText+= "background: rgb(0, 0, 0, 0.7); background-image: url('/des157a/Assets/illus-madlibs.png'); background-blend-mode: darken; background-repeat: no-repeat; width: 1366px; max-height: 768px; position: absolute; margin: auto; ";
            let closeBtn = document.querySelector('#close');
            closeBtn.addEventListener('click',function(){
                resetMadlibs();
            })
        }
            
    })

    function resetMadlibs() {
        madlib.innerHTML = ''
        madlib.style.visibility = "hidden";
        myForm.style.visibility = "visible";
        myForm.innerHTML = `<div class="convo">
            <p id="conver">So, you wanna write another one?</p>
            <button id="replay">Yes</button>
            <button id="quit">No</button>
        </div>`;
        bodyTag.style.cssText= "background-image: url('/des157a/Assets/illus-madlibs.png'); background-repeat: no-repeat; width: 1366px; max-height: 768px; position: absolute; margin: auto; ";
        myForm.style.top = "67px";
        myForm.style.left = "574px";
        let restartBtn = document.querySelector('#replay');
            restartBtn.addEventListener('click',function(){
               location.reload();
        })
        let closeBtn = document.querySelector('#close');
        closeBtn.addEventListener('click',function(){
            console.log('this is just a dud button');
        })
    }


}());