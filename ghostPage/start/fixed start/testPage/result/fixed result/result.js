'use strict'
const containerTag = document.createElement("div");
containerTag.classList.add("container");
document.body.append(containerTag);
const mainDiv = document.createElement('div');
mainDiv.id = ('main');
containerTag.append(mainDiv);
const leftDiv = document.createElement('div')
leftDiv.id = 'leftDiv'
mainDiv.append(leftDiv)
//
const leftDivImg = document.createElement('img')
leftDivImg.id = 'leftDivImg';
leftDivImg.src = "./docs/dd2c927be9d6377dfae2215b91e3a4f4.gif"
leftDiv.append(leftDivImg)
//
const mainRightDiv = document.createElement('div');
mainRightDiv.id = ('mainRight');
mainDiv.append(mainRightDiv);
const rigthBackground = document.createElement('div');
rigthBackground.id = ('rightBackground');
mainRightDiv.append(rigthBackground);
const iconImg = document.createElement('img');
iconImg.id = ('iconImg')
iconImg.src = 'docs/Frame 2 (1).png';
rigthBackground.append(iconImg);
const pWellDone = document.createElement('p');
pWellDone.id = ('wellDone');
pWellDone.textContent = 'WELL DONE!';
rigthBackground.append(pWellDone);
const pText = document.createElement('p');
pText.id = ('text');
pText.textContent = 'Thanks For Visiting Our Site.';
rigthBackground.append(pText);
const boxDiv = document.createElement('div');
boxDiv.id = ('box')
rigthBackground.append(boxDiv);
const resultBox = document.createElement('div')
resultBox.id = 'resultBox'
boxDiv.append(resultBox)
const result = document.createElement('div')
result.id = 'result'
resultBox.append(result)
const lineImg = document.createElement('img')
lineImg.id = 'line'
lineImg.setAttribute("src" , 'docs/Line 1.png')
result.append(lineImg)
const testResult = document.createElement('p')
testResult.textContent = 'Test Result'
result.append(testResult)
const iq = document.createElement('p')
iq.textContent = 'IQ 120'
iq.id='IQ'
result.append(iq)
const iqDescription = document.createElement('p')
// we use inner html to allow us use HTML tags(like <br>)
iqDescription.innerHTML = 'Thank you for taking the IQ test!<br>Your score suggests average intelligence. While this might not be what you expected, remember that IQ tests only measure certain skills.Everyone has unique strengths,but remember you are Dumb!You Alone Are The Monkey One..' 
result.append(iqDescription)
// personIconImg.src = "docs/image.png2.png";
const startAgainBtn = document.createElement('a');
startAgainBtn.id = ('startAgainBtn');
startAgainBtn.href = "/ghostPage/start/fixed start/testPage/testPages.html";
startAgainBtn.textContent = "Start Again";
boxDiv.append(startAgainBtn);
const mainLeftDiv = document.createElement('div');
mainLeftDiv.id = ('mainLeft');
mainDiv.append(mainLeftDiv);
const itemsDiv = document.createElement('div');
itemsDiv.id = ('items');
mainLeftDiv.append(itemsDiv);
const menuImg = document.createElement('img');
menuImg.id = ('menuImg')
menuImg.src = 'docs/Bulleted List.png';
itemsDiv.append(menuImg);
const menuUl = document.createElement('ul');
itemsDiv.append(menuUl);
const li1 = document.createElement('li');
menuUl.append(li1);
const liA1 = document.createElement('a')
liA1.href = '#'
liA1.textContent = 'Home';
li1.append(liA1)
const li2 = document.createElement('li');
menuUl.append(li2);
const liA2 = document.createElement('a')
liA2.href = '#'
liA2.textContent = 'About Us';
li2.append(liA2)
const li3 = document.createElement('li');

menuUl.append(li3);
const liA3 = document.createElement('a')
liA3.href = '#'
liA3.textContent = 'Contact US';
li3.append(liA3)
const startBtn = document.createElement('div');
startBtn.id = ('resultBtn');
startBtn.textContent = 'Result'
itemsDiv.append(startBtn);
