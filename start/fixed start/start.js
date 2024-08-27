"use strict";
//containerTag
const containerTag = document.createElement("div");
containerTag.classList.add("container");
document.body.append(containerTag);
const containerTagDiv = document.createElement("div");
containerTagDiv.classList.add("prestartContainer");
containerTag.append(containerTagDiv);
//containerTagDivFirstDi
const containerTagDivFirstDiv = document.createElement("div");
containerTagDivFirstDiv.id = "person";
containerTagDiv.append(containerTagDivFirstDiv);
//person icon on top
const containerTagDivFirstDivImg = document.createElement("img");
containerTagDivFirstDivImg.src = "./docs/Person.png";
containerTagDivFirstDiv.append(containerTagDivFirstDivImg);
//containerTagDivFirstDiv ended
// containerTagDivSecondDiv
const containerTagDivSecondDiv = document.createElement("div");
containerTagDivSecondDiv.classList.add("startContainer");
containerTagDiv.append(containerTagDivSecondDiv);
//the main box
const containerTagDivSecondDiv_Div = document.createElement("div");
containerTagDivSecondDiv_Div.classList.add("startMainDiv");
containerTagDivSecondDiv.append(containerTagDivSecondDiv_Div);
//containerTagDivSecondDiv_Div has div*2 in it and for each, we have img and input
const containerTagDivSecondDiv_Div_FirstDiv = document.createElement("div");
containerTagDivSecondDiv_Div_FirstDiv.id = "name";
containerTagDivSecondDiv_Div.append(containerTagDivSecondDiv_Div_FirstDiv);
//containerTagDivSecondDiv_Div img
const containerTagDivSecondDiv_Div_FirstDivImg = document.createElement("img");
containerTagDivSecondDiv_Div_FirstDivImg.src = "./docs/Person.png";
containerTagDivSecondDiv_Div_FirstDivImg.id = "nameImg";
containerTagDivSecondDiv_Div_FirstDiv.append(
  containerTagDivSecondDiv_Div_FirstDivImg
);
// containerTagDivSecondDiv_Div input
const containerTagDivSecondDiv_Div_FirstDivInput =
  document.createElement("input");
containerTagDivSecondDiv_Div_FirstDivInput.id = "nameInput";
containerTagDivSecondDiv_Div_FirstDivInput.placeholder = "  Name";
containerTagDivSecondDiv_Div_FirstDivInput.type = "text";
containerTagDivSecondDiv_Div_FirstDiv.append(
  containerTagDivSecondDiv_Div_FirstDivInput
);
//containerTagDivSecondDiv_Div_secondDiv also has div*2 in it and for each, we have img and input
const containerTagDivSecondDiv_Div_secondDiv = document.createElement("div");
containerTagDivSecondDiv_Div_secondDiv.id = "age";
containerTagDivSecondDiv_Div.append(containerTagDivSecondDiv_Div_secondDiv);
//containerTagDivSecondDiv_Div_secondDiv img
const containerTagDivSecondDiv_Div_secondDivImg = document.createElement("img");
containerTagDivSecondDiv_Div_secondDivImg.id = "ageImg";
containerTagDivSecondDiv_Div_secondDivImg.src = "docs/Compare Heights.png";
containerTagDivSecondDiv_Div_secondDiv.append(
  containerTagDivSecondDiv_Div_secondDivImg
);
//containerTagDivSecondDiv_Div_secondDiv input
const containerTagDivSecondDiv_Div_secondDivInput =
  document.createElement("input");
containerTagDivSecondDiv_Div_secondDivInput.id = "ageInput";
containerTagDivSecondDiv_Div_secondDivInput.placeholder = "  Age";
containerTagDivSecondDiv_Div_secondDivInput.type = "text";
containerTagDivSecondDiv_Div_secondDiv.append(
  containerTagDivSecondDiv_Div_secondDivInput
);
// containerTagDivSecondDiv_Div_secondDiv ends
// containerTagDivThirdDiv ends
const containerTagDivThirdDiv = document.createElement("div");
containerTagDivThirdDiv.classList.add("startBtn");
containerTagDiv.append(containerTagDivThirdDiv);
const containerTagDivThirdDivA = document.createElement("a");
containerTagDivThirdDivA.href = "./testPage/test.html";
containerTagDivThirdDivA.id = "startBtnA";
containerTagDivThirdDivA.textContent = "START";
containerTagDivThirdDiv.append(containerTagDivThirdDivA);
