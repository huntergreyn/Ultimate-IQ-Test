'use strict'
// converting Dom
const box = document.createElement('div')
box.classList.add('box')
document.body.append(box)
///// boxTag has 2 inner div(first-box ghost, second-box description)
//// box ghost
const box__ghost = document.createElement('div')
box__ghost.classList.add('box__ghost')
box.append(box__ghost)
/// box__ghostdiv has div*8 within it(for symbols and ghost details)
//div symbol 1
const symbol1 = document.createElement('div')
symbol1.classList.add('symbol')
box__ghost.append(symbol1)
// div symbol 2
const symbol2 = document.createElement('div')
symbol2.classList.add('symbol')
box__ghost.append(symbol2)
// div symbol 3
const symbol3 = document.createElement('div')
symbol3.classList.add('symbol')
box__ghost.append(symbol3)
// div symbol 4
const symbol4 = document.createElement('div')
symbol4.classList.add('symbol')
box__ghost.append(symbol4)
// div symbol 5
const symbol5 = document.createElement('div')
symbol5.classList.add('symbol')
box__ghost.append(symbol5)
// div symbol 6
const symbol6 = document.createElement('div')
symbol6.classList.add('symbol')
box__ghost.append(symbol6)
//// div 7 is abt box ghost container
const box__ghostcontainer = document.createElement('div')
box__ghostcontainer.classList.add('box__ghost-container')
box__ghost.append(box__ghostcontainer)
/// div 7 has div*2 within it one for ghost eye and other one for ghost bottom
// first div (eyes) -- has 2 div for each eye
const box__ghosteyes = document.createElement('div')
box__ghosteyes.classList.add('box__ghost-eyes')
box__ghostcontainer.append(box__ghosteyes)
// left eye--
const box__eyeleft = document.createElement('div')
box__eyeleft.classList.add('box__eye-left')
box__ghosteyes.append(box__eyeleft)
// right eye--
const box__eyeright = document.createElement('div')
box__eyeright.classList.add('box__eye-right')
box__ghosteyes.append(box__eyeright)
/// ghost eyes ends
/// ghost bottom (has div*5 dic within it)
const box__ghostbottom = document.createElement('div')
box__ghostbottom.classList.add('box__ghost-bottom')
box__ghostcontainer.append(box__ghostbottom)
// div 1
const box__ghostbottom_Div1 = document.createElement('div')
box__ghostbottom.append(box__ghostbottom_Div1)
// div 2
const box__ghostbottom_Div2 = document.createElement('div')
box__ghostbottom.append(box__ghostbottom_Div2)
// div 3
const box__ghostbottom_Div3 = document.createElement('div')
box__ghostbottom.append(box__ghostbottom_Div3)
// div 4
const box__ghostbottom_Div4 = document.createElement('div')
box__ghostbottom.append(box__ghostbottom_Div4)
// div 5
const box__ghostbottom_Div5 = document.createElement('div')
box__ghostbottom.append(box__ghostbottom_Div5)
/// div 7(box__ghost-container) ends
// div 8 begins (contains ghost shadow)
const box__ghostshadow = document.createElement('div')
box__ghostshadow.classList.add('box__ghost-shadow')
box__ghost.append(box__ghostshadow)
//// box ghost ends
///
//
///// description box begins
//// description box has div*2 a*1(one div on top for long text for internet connection.., an a tag in middle for back to homepage btn, and a div located in bottom for verification that you are not a robot)
const box__description = document.createElement('div')
box__description.classList.add('box__description')
box.append(box__description)
/// first div(top div) has a container
const box__descriptioncontainer = document.createElement('div')
box__descriptioncontainer.classList.add('box__description-container')
box__description.append(box__descriptioncontainer)
// following div has div*2 iwthin in (frst one is for top text for title, second one is for long bottom text)
// first div(title)
const box__descriptiontitle = document.createElement('div')
box__descriptiontitle.classList.add('box__description-title')
box__descriptiontitle.textContent = 'Whoops!'
box__descriptioncontainer.append(box__descriptiontitle)
// second div(text)
const box__descriptiontext = document.createElement('div')
box__descriptiontext.classList.add('box__description-text-title')
box__descriptiontext.textContent = 'Ultimate IQ Test needs to review the security of your connection before proceeding.'
box__descriptioncontainer.append(box__descriptiontext)
// first div of box__description ends
/// a tag in middle of box__description begins
const box__button = document.createElement('a')
box__button.classList.add('box__button')
box__button.href = 'https://alirezanoshad.github.io/Ultimate-IQ-Test/'
box__button.textContent = 'Go back'
box__description.append(box__button)
// a tag in middle of box__description ends
//// bottom div(verifyDiv) of box__description begins
/// bottom div has img*4(pre and after check icon + loading + reCaptcha icon) a*1(fot verify btn)
const verifyDiv = document.createElement('div')
verifyDiv.classList.add('verifyDiv')
box__description.append(verifyDiv)
// img for precheck icon
const preCheckBoxIcon = document.createElement('img')
preCheckBoxIcon.src = './docs/checkbox-regular-24.png'
preCheckBoxIcon.id = 'preCheckBoxIcon'
preCheckBoxIcon.onclick = verifyFunction
verifyDiv.append(preCheckBoxIcon)
// img for loading icon
const animatedIcon = document.createElement('img')
animatedIcon.id = 'animatedIcon'
animatedIcon.src = './docs/loader-alt-regular-24 (2).png'
verifyDiv.append(animatedIcon)
// img for after check icon
const afterCheckBox = document.createElement('img')
afterCheckBox.id = 'afterCheckBox'
afterCheckBox.src = './docs/checkbox-checked-solid-24.png'
verifyDiv.append(afterCheckBox)
// a tag for ( im not a robot ) text
const verifyDivA = document.createElement('a')
verifyDivA.href = '#'
verifyDivA.textContent = "I'm not a robot"
verifyDiv.append(verifyDivA)
// img for reCAPTHCA icon
const reCAPTHCAIcon = document.createElement('img')
reCAPTHCAIcon.id = 'reCAPTHCAIcon'
reCAPTHCAIcon.src = './docs/pngegg.png'
reCAPTHCAIcon.alt = 'recaptcha icon'
verifyDiv.append(reCAPTHCAIcon)
// verifyDiv ends
///box__description
//// box ends
///
//
//// ghost js codes
var pageX = $(document).width();
var pageY = $(document).height();
var mouseY = 0;
var mouseX = 0;

$(document).mousemove(function (event) {
    // verticalAxis
    mouseY = event.pageY;
    var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

    // horizontalAxis
    mouseX = event.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    // Ensure the selector targets the correct eyes container
    $(".box__ghost-eyes").css({
        transform: "translate(" + xAxis + "%," + -yAxis + "%)" // Corrected the transform syntax
    });
});

//a tag when  funtion start.. will dipaley under verification
const lastAlert = document.createElement('a')
lastAlert.id = 'lastAlertId'
lastAlert.textContent = 'This may take a few seconds...'
box.append(lastAlert)

// verifty process
function verifyFunction() {
  preCheckBoxIcon.style = 'opacity:0 ; z-index:0'
  setTimeout(() => {
          animatedIcon.style = 'opacity:1 ; z-index:3'
          lastAlert.style = 'opacity:1'
  }, 500);
  // lastalert appears..
  setTimeout(() => {
          animatedIcon.style = 'opacity:0 ; z-index:0'
          lastAlert.style = 'opacity:1'
  }, 10000);
  setTimeout(() => {
      afterCheckBox.style = 'opacity:2 ; z-index:3'
      lastAlert.style = 'opacity:0'
}, 11000);
//
setTimeout(() => {
  afterCheckBox.style = 'opacity:0.8 ; z-index:3'
}, 12500);
setTimeout(() => {
  afterCheckBox.style = 'opacity:1 ; z-index:3'
  window.location.href = "./start/fixed start/start.html"
}, 14000);
//after the verification process go to the testpages
}