'use strict'
const containerTag = document.createElement('div')
containerTag.classList.add('container')
document.body.append(containerTag)
//containerTag has 3 divs in it
//containerTagFirstDiv
const containerTagFirstDiv = document.createElement('div')
containerTagFirstDiv.id = 'person'
containerTag.append(containerTagFirstDiv)
//img
const containerTagFirstDivImg = document.createElement('img')
containerTagFirstDivImg.src = './docs/Person.png'
containerTagFirstDiv.append(containerTagFirstDivImg)
//containerTagFirstDiv Ends
//containerTagSecondDiv Begins
const containerTagSecondDiv = document.createElement('div')
containerTagSecondDiv.classList.add('startContainer')
containerTag.append(containerTagSecondDiv)
// containerTagSecondDiv has a div inside it
const containerTagSecondDiv_Div = document.createElement('div')
containerTagSecondDiv_Div.classList.add('startMainDiv')

containerTagSecondDiv.append(
    containerTagSecondDiv_Div)
// containerTagSecondDiv_Div have 2 divs inside it for the actual result
//leftDiv
const containerTagSecondDiv_DivFirstDiv = document.createElement('div')
containerTagSecondDiv_DivFirstDiv.id = 'leftDiv'
containerTagSecondDiv_Div.append(containerTagSecondDiv_DivFirstDiv)
// left div has an image inside it
const containerTagSecondDiv_DivFirstDivImg = document.createElement('img')
containerTagSecondDiv_DivFirstDivImg.id = 'leftDivImg'
containerTagSecondDiv_DivFirstDivImg.src = './docs/Pass Fail.png'
containerTagSecondDiv_DivFirstDiv.append(containerTagSecondDiv_DivFirstDivImg)
//leftDiv Done
//rightDiv begins
const containerTagSecondDiv_DivSecondDiv = document.createElement('div')  
containerTagSecondDiv_DivSecondDiv.id = 'rightDiv'
containerTagSecondDiv_Div.append(containerTagSecondDiv_DivSecondDiv)
//rightDiv has p*3 within it
//First p tag
const containerTagSecondDiv_DivSecondDivP1 = document.createElement('p')
containerTagSecondDiv_DivSecondDivP1.id = 'topP'
containerTagSecondDiv_DivSecondDivP1.textContent = 'TEST RESULT'
containerTagSecondDiv_DivSecondDiv.append(containerTagSecondDiv_DivSecondDivP1)
//Second p tag
const containerTagSecondDiv_DivSecondDivP2 = document.createElement('p')
containerTagSecondDiv_DivSecondDivP2.id = 'midP'
containerTagSecondDiv_DivSecondDivP2.textContent = 'IQ'
containerTagSecondDiv_DivSecondDiv.append(containerTagSecondDiv_DivSecondDivP2)
//mid p IQQQ
const IQDiv = document.createElement('div')
IQDiv.id = 'iqDiv'
containerTagSecondDiv_DivSecondDivP2.append(IQDiv)
const IQ = document.createElement('a')
IQ.text = '61'
IQ.id = 'iq'
IQDiv.append(IQ)
//Third p tag
const containerTagSecondDiv_DivSecondDivP3 = document.createElement('p')
containerTagSecondDiv_DivSecondDivP3.id = 'botP'
containerTagSecondDiv_DivSecondDivP3.textContent = "Thank you for taking the IQ test! Your score suggests average intelligence. While this might not be what you expected, remember that IQ tests only measure certain skills.Everyone has unique strengths,but remember you are Dumb!..'You Alone Are The Monkey One'"
containerTagSecondDiv_DivSecondDiv.append(containerTagSecondDiv_DivSecondDivP3)
//rightDiv Ends
// third div (insdie container) begins
const containerTagThirdDiv = document.createElement('div')
containerTagThirdDiv.classList.add('startBtn')
containerTag.append(containerTagThirdDiv)
//has a*1 ta within it
const containerTagThirdDivA = document.createElement('a')
containerTagThirdDivA.href = 'https://alirezanoshad.github.io/IQ-quiz/'
containerTagThirdDivA.id = 'startBtnA'
containerTagThirdDivA.textContent = 'START AGAIN'
containerTagThirdDiv.append(containerTagThirdDivA)
