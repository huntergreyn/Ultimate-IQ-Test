// refrences from html
const box = document.querySelector('.box');
const preCheckBoxIcon = document.getElementById('preCheckBoxIcon')
const animatedIcon = document.getElementById('animatedIcon')
const afterCheckBox = document.getElementById('afterCheckBox')

/// ghost js codes
var pageX = $(document).width();
var pageY = $(document).height();
var mouseY = 0;
var mouseX = 0;

$(document).mousemove(function (event) {
  //verticalAxis
  mouseY = event.pageY;
  yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
  //horizontalAxis
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  $(".box__ghost-eyes").css({
    transform: "translate(" + xAxis + "%,-" + yAxis + "%)"
  });

  //console.log('X: ' + xAxis);
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
    }, 1000);
    // lastalert appears..
    setTimeout(() => {
            animatedIcon.style = 'opacity:0 ; z-index:0'
            lastAlert.style = 'opacity:1'
    }, 10000);
    setTimeout(() => {
        afterCheckBox.style = 'opacity:1 ; z-index:3'
        lastAlert.style = 'opacity:0'
}, 11000);
//
setTimeout(() => {
    afterCheckBox.style = 'opacity:0.2 ; z-index:3'
}, 12500);
setTimeout(() => {
    afterCheckBox.style = 'opacity:0.8 ; z-index:3'
}, 14000);
setTimeout(() => {
    afterCheckBox.style = 'opacity:0.2 ; z-index:3'
}, 15500);
setTimeout(() => {
    afterCheckBox.style = 'opacity:0.8 ; z-index:3'
}, 17000);
setTimeout(() => {
    afterCheckBox.style = 'opacity:0.2 ; z-index:3'
}, 18500);
setTimeout(() => {
    afterCheckBox.style = 'opacity:1 ; z-index:3'
    window.location.href = "./start/fixed start/start.html"
}, 20000);
//after the verification process go to the testpages
}