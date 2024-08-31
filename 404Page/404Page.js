'use strict'
// html convert to js convert 
// creating main tag nad putting it in html 
const mainTag = document.createElement('main')
document.body.append(mainTag)
///main tag has a div with 'btoh' class name
const mainTagDiv = document.createElement('div')
mainTagDiv.classList.add('both')
mainTag.append(mainTagDiv)
// inside the following div, we have img*1 (for scary main)  and div*1 (for click btn)
// it's img
const mainTagDivImg = document.createElement('img')
mainTagDivImg.src = './Docs/003.gif'
mainTagDivImg.id = 'mainImg'
mainTagDivImg.alt = 'main photo'
mainTagDiv.append(mainTagDivImg)
// it's div
const mainTagDiv_Div = document.createElement('div')
mainTagDiv_Div.id = 'btnDiv'
mainTagDiv.append(mainTagDiv_Div)
// following div has a*1(for clock btn)
const mainTagDiv_DivA = document.createElement('a')
mainTagDiv_DivA.id = 'backBtn'
mainTagDiv_DivA.href = 'https://alirezanoshad.github.io/Ultimate-IQ-Test/'
mainTagDiv_Div.append(mainTagDiv_DivA)