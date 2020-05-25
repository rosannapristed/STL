"use strict";
// COUNTDOWNKODE
//FRA CODEPEN
//CREDIT - https://codepen.io/AllThingsSmitty/pen/JJavZN?fbclid=IwAR0xvF9w_RjYGHaJMbd9i6iL2z5HtRM6gP04OAbxJbyj-8UFk6-jK12nFHY

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Sep 01, 2020 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //clearInterval(x);
        //'LAUNCHING DAY!;
        // }

    }, second)



//MOVING TEXT, ALL BODIES ARE GOOD BODIES

var aText = new Array(
    "We believe that all bodies are good bodies. You should too!");
var iSpeed = 70; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

//FRA MORTEN A.
function erSynlig(elementId) {

    const elementBoks = document.getElementById(elementId).getBoundingClientRect();

    const halvtredsPct = elementBoks.height * 0.5;

    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {

        return false;
    }
}

// Hovedprogramdel

const tekstId = "valuepakke";

let harSkrevet = false;



window.addEventListener("scroll", function () {

    if (harSkrevet === false && erSynlig(tekstId)) {

        typewriter();

        harSkrevet = true;

    }

});




// NEDENSTÅENDE KODE FRA W3SCHOOLS https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick&fbclid=IwAR0EIy7odJYXneGbRLjVJx9PizZH0GJkJvTFTrrDeN1VRQVMvGgLDRfPWQk
///////TAK FOR TILMELDING /////
function myFunction() {
    document.getElementById("demo").innerHTML = "Tak for din tilmelding!<br> Du vil snart modtage en velkomstmail.";
}
