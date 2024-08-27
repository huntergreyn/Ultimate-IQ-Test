'use strict'
///conitanertag
//container tag nav*1 and main div*5(main1 for iq test, main2 for why iq test box.., main3&4 is  for meet out team, main5 is for contact us panel)
//creating container
const containerTag = document.createElement('div');
containerTag.classList.add('container');
//putting container inside HTML
document.body.append(containerTag);
//navbar begins
const navbar = document.createElement('nav');
containerTag.append(navbar);
///navbar has div*3 within it
///first div for logo(has img*1 within it)
const navbarLogo = document.createElement('div');
navbarLogo.classList.add('navLogo');
navbar.append(navbarLogo)
//its img
const navbarLogoImg = document.createElement('img')
navbarLogoImg.src = './docs/Component 1.png'
navbarLogo.append(navbarLogoImg)
///second div for nav btns(has a*4 within it)
const navbarBtn = document.createElement('div')
navbarBtn.classList.add('navBtn')
navbar.append(navbarBtn)
//first a
const navbarBtnA1 = document.createElement('a')
navbarBtnA1.href = '#main1'
navbarBtnA1.textContent = 'Home'
navbarBtn.append(navbarBtnA1)
// second a
const navbarBtnA2 = document.createElement('a')
navbarBtnA2.href = '#main3'
navbarBtnA2.textContent = 'About Us'
navbarBtn.append(navbarBtnA2)
//third a
const navbarBtnA3 = document.createElement('a')
navbarBtnA3.href = './start/fixed start/start.html'
navbarBtnA3.textContent = 'IQ Test'
navbarBtn.append(navbarBtnA3)
//forth a
const navbarBtnA4 = document.createElement('a')
navbarBtnA4.href = '#contactUs'
navbarBtnA4.textContent = 'Contact Us'
navbarBtn.append(navbarBtnA4)
///third div is for search engine(has img*1 input*1)
const navbarSearch = document.createElement('div')
navbarSearch.classList.add('navSearch')
navbar.append(navbarSearch)
//its img
const navbarSearchImg = document.createElement('img')
navbarSearchImg.src = './docs/icon.img.png'
navbarSearchImg.classList.add('navSearchIcon')
navbarSearch.append(navbarSearchImg)
//its input
const navbarSearchInput = document.createElement('input')
navbarSearchInput.classList.add('navSearchInput')
navbarSearchInput.type = 'text'
navbarSearch.append(navbarSearchInput)
//navbar finished
//main1 begins
const main1Tag = document.createElement('div')
main1Tag.classList.add('main1')
containerTag.append(main1Tag)
//main1 has 2 Section.. fist one for start iq test and second one is for iq test img
//section 1 (has a*4)
const main1TagSection1 = document.createElement('div')
main1TagSection1.classList.add('section1')
main1Tag.append(main1TagSection1)
//first a
const main1TagSection1A1 =document.createElement('a')
main1TagSection1A1.href = '#'
main1TagSection1A1.textContent = 'TEST YOUR IQ'
main1TagSection1.append(main1TagSection1A1)
// second a (has 2 span within it)
const main1TagSection1A2 =document.createElement('a')
main1TagSection1A2.id = 'quizNow'
main1TagSection1A2.href = '#'
main1TagSection1.append(main1TagSection1A2)
//second a_first span
const main1TagSection1A1Span1 = document.createElement('span')
main1TagSection1A1Span1.textContent = ' QUIZ '
main1TagSection1A2.append(main1TagSection1A1Span1)
//second a_second span
const main1TagSection1Span2 = document.createElement('span')
main1TagSection1Span2.textContent = ' NOW '
main1TagSection1A2.append(main1TagSection1Span2)
//third a
const main1TagSection1A3 = document.createElement('a')
main1TagSection1A3.href = '#'
main1TagSection1A3.textContent = 'An intelligence quotient (IQ) is a total score derived from a set of standardised tests or subtests designed to assess human intelligence. The abbreviation "IQ" was coined by the psychologist William Stern for the German term Intelligenzquotient, his term for a scoring method for intelligence tests at University of Breslau he advocated in a 1912 book.'
main1TagSection1.append(main1TagSection1A3)
//forth a 
const main1TagSection1A4 = document.createElement('a')
main1TagSection1A4.href = './start/fixed start/start.html'
main1TagSection1A4.textContent = 'Start Test'
main1TagSection1.append(main1TagSection1A4)
//section 1 ends
///section 2 begins (has img*1)
const main1TagSection2 = document.createElement('div')
main1TagSection2.classList.add('section2')
main1Tag.append(main1TagSection2)
//its img
const main1TagSection2Img = document.createElement('img')
main1TagSection2Img.id = 'mainImage'
main1TagSection2Img.src = './docs/main.img.png'
main1TagSection2.append(main1TagSection2Img)
// section 2 ends
///main 2 begins
const main2Tag = document.createElement('div')
main2Tag.classList.add('main2')
containerTag.append(main2Tag)
//main 2 has div*1(and a*1 + img*4 withing it for mainbox)
const main2Tag_Div = document.createElement('div')
main2Tag_Div.id = 'mainList'
main2Tag.append(main2Tag_Div)
//its a
const main2Tag_DivA = document.createElement('a')
main2Tag_DivA.href = '#'
main2Tag_DivA.textContent = 'How Can I Check My IQ Level?'
main2Tag_Div.append(main2Tag_DivA)
//its first img
const main2Tag_DivImg1 = document.createElement('img')
main2Tag_DivImg1.id = 'listImage1'
main2Tag_DivImg1.src = './docs/main.image1.png'
main2Tag_Div.append(main2Tag_DivImg1)
//its second img
const main2Tag_DivImg2 = document.createElement('img')
main2Tag_DivImg2.id = 'listImage2'
main2Tag_DivImg2.src = './docs/main.image2.png'
main2Tag_Div.append(main2Tag_DivImg2)
//its third img
const main2Tag_DivImg3 = document.createElement('img')
main2Tag_DivImg3.id = 'listImage3'
main2Tag_DivImg3.src = './docs/favicon.png'
main2Tag_Div.append(main2Tag_DivImg3)
//its forth img
const main2Tag_DivImg4 = document.createElement('img')
main2Tag_DivImg4.id = 'listImage4'
main2Tag_DivImg4.src = './docs/main.image4.png'
main2Tag_Div.append(main2Tag_DivImg4)
// main 2 extends(mainlist)
///main 3 begins
//main 3 is for (meet out team text above the team intro..)
const main3Tag = document.createElement('div')
main3Tag.id = 'main3'
containerTag.append(main3Tag)
//main 3 has (has div*1(a*2 within it))
const main3Tag_Div = document.createElement('div')
main3Tag_Div.id = 'ourTeam'
main3Tag.append(main3Tag_Div)
//first a
const main3Tag_DivA1 = document.createElement('a')
main3Tag_DivA1.id = 'teamText1'
main3Tag_DivA1.href = '#'
main3Tag_DivA1.textContent = 'Team'
main3Tag_Div.append(main3Tag_DivA1)
//second a (has span*2 within it)
const main3Tag_DivA2 = document.createElement('a')
main3Tag_DivA2.id = 'teamText2'
main3Tag_DivA2.href = '#'
main3Tag_Div.append(main3Tag_DivA2)
//a's first span 
const main3Tag_DivA2Span1 = document.createElement('span')
main3Tag_DivA2Span1.textContent = ' MEET OUR '
main3Tag_DivA2.append(main3Tag_DivA2Span1)
//a's second span
const main3Tag_DivA2Span2 = document.createElement('span')
main3Tag_DivA2Span2.textContent = ' TEAM '
main3Tag_DivA2.append(main3Tag_DivA2Span2)
//main3Tag_Div ends
//main 3 ends
///main 4 begins
// main 4 designed for introducing team members(has an introduce div)
const main4Tag = document.createElement('div')
main4Tag.id = 'main4'
containerTag.append(main4Tag)
//the insider tag or introduce div.. has 4 members to intoduce(div*4)
const main4TagIntroduce = document.createElement('div')
main4TagIntroduce.id = 'introduce'
main4Tag.append(main4TagIntroduce)

//each member introduve div has img*2(for member and bg) div*1(within p*2 for about memeber)
/////first member to introduce
const main4TagIntroduce1 = document.createElement('div')
main4TagIntroduce1.id = 'introduce1'
main4TagIntroduce.append(main4TagIntroduce1)
//first img of first intro..
const main4TagIntroduce1Img1 = document.createElement('img')
main4TagIntroduce1Img1.id = 'purp1'
main4TagIntroduce1Img1.src = './docs/purp.png'
main4TagIntroduce1Img1.style = 'top: -187px; left:-9px ;'
main4TagIntroduce1.append(main4TagIntroduce1Img1)
//second img of first intro..
const main4TagIntroduce1Img2 = document.createElement('img')
main4TagIntroduce1Img2.id = 'mrKrabs'
main4TagIntroduce1Img2.src = './docs/mrKrabs.png'
main4TagIntroduce1.append(main4TagIntroduce1Img2)
//detail(p) of first intro..
const main4TagIntroduce1_Div = document.createElement('div')
main4TagIntroduce1_Div.id = 'hadi'
main4TagIntroduce1.append(main4TagIntroduce1_Div)
//following div has p*2
//first p 
const main4TagIntroduce1_DivP1 = document.createElement('p')
main4TagIntroduce1_DivP1.id = 'name1'
main4TagIntroduce1_DivP1.textContent = 'Hadi Bahadori'
main4TagIntroduce1_Div.append(main4TagIntroduce1_DivP1)
//second p
const main4TagIntroduce1_DivP2 = document.createElement('p')
main4TagIntroduce1_DivP2.id = 'desc1'
main4TagIntroduce1_DivP2.textContent = 'a 21 Year-old Front End Developer From Iran.'
const main4TagIntroduce1_DivP3 = document.createElement("p")
main4TagIntroduce1_DivP3.id = "language1"
main4TagIntroduce1_DivP3.textContent = 'languages: Html, Css, Java Script'
main4TagIntroduce1_Div.append(main4TagIntroduce1_DivP2)
main4TagIntroduce1_Div.append(main4TagIntroduce1_DivP3)
//////
///////second member to introduce
const main4TagIntroduce2 = document.createElement('div')
main4TagIntroduce2.id = 'introduce2'
main4TagIntroduce.append(main4TagIntroduce2)
//first img of second intro..
const main4TagIntroduce2Img1 = document.createElement('img')
main4TagIntroduce2Img1.id = 'purp1'
main4TagIntroduce2Img1.src = './docs/purp.png'
main4TagIntroduce2Img1.style = 'top: -187px; left:-9px ;'
main4TagIntroduce2.append(main4TagIntroduce2Img1)
//second img of second intro..
const main4TagIntroduce2Img2 = document.createElement('img')
main4TagIntroduce2Img2.id = 'squidward'
main4TagIntroduce2Img2.src = './docs/squidward.png'
main4TagIntroduce2.append(main4TagIntroduce2Img2)
//detail(p) of second intro..
const main4TagIntroduce2_Div = document.createElement('div')
main4TagIntroduce2_Div.id = 'paryan'
main4TagIntroduce2.append(main4TagIntroduce2_Div)
//following div has p*2
//first p 
const main4TagIntroduce2_DivP1 = document.createElement('p')
main4TagIntroduce2_DivP1.id = 'name2'
main4TagIntroduce2_DivP1.textContent = 'Paryan Talashki'
main4TagIntroduce2_Div.append(main4TagIntroduce2_DivP1)
//second p
const main4TagIntroduce2_DivP2 = document.createElement('p')
main4TagIntroduce2_DivP2.id = 'desc2'
main4TagIntroduce2_DivP2.textContent = 'a 16 Year-old Front End Developer From Iran.'
const main4TagIntroduce2_DivP3 = document.createElement("p")
main4TagIntroduce2_DivP3.id = "language1"
main4TagIntroduce2_DivP3.textContent = 'languages: Html, Css, Java Script'
main4TagIntroduce2_Div.append(main4TagIntroduce2_DivP2)
main4TagIntroduce2_Div.append(main4TagIntroduce2_DivP3)
////
///////third member to introduce
const main4TagIntroduce3 = document.createElement('div')
main4TagIntroduce3.id = 'introduce3'
main4TagIntroduce.append(main4TagIntroduce3)
//first img of third intro..
const main4TagIntroduce3Img1 = document.createElement('img')
main4TagIntroduce3Img1.id = 'purp1'
main4TagIntroduce3Img1.src = './docs/purp.png'
main4TagIntroduce3Img1.style = 'top: -187px; left:-9px ;'
main4TagIntroduce3.append(main4TagIntroduce3Img1)
//second img of third intro..
const main4TagIntroduce3Img2 = document.createElement('img')
main4TagIntroduce3Img2.id = 'sandy'
main4TagIntroduce3Img2.src = './docs/sandy.png'
main4TagIntroduce3.append(main4TagIntroduce3Img2)
//detail(p) of third intro..
const main4TagIntroduce3_Div = document.createElement('div')
main4TagIntroduce3_Div.id = 'niki'
main4TagIntroduce3.append(main4TagIntroduce3_Div)
//following div has p*2
//first p 
const main4TagIntroduce3_DivP1 = document.createElement('p')
main4TagIntroduce3_DivP1.id = 'name3'
main4TagIntroduce3_DivP1.textContent = 'Niki Bagheri'
main4TagIntroduce3_Div.append(main4TagIntroduce3_DivP1)
//second p
const main4TagIntroduce3_DivP2 = document.createElement('p')
main4TagIntroduce3_DivP2.id = 'desc3'
main4TagIntroduce3_DivP2.textContent = 'a 16 Year-old Front End Developer From Iran.'
const main4TagIntroduce3_DivP3 = document.createElement("p")
main4TagIntroduce3_DivP3.id = "language1"
main4TagIntroduce3_DivP3.textContent = 'languages: Html, Css, Java Script'
main4TagIntroduce3_Div.append(main4TagIntroduce3_DivP2)
main4TagIntroduce3_Div.append(main4TagIntroduce3_DivP3)
////
///////forth member to introduce
const main4TagIntroduce4 = document.createElement('div')
main4TagIntroduce4.id = 'introduce4'
main4TagIntroduce.append(main4TagIntroduce4)
//first img of third intro..
const main4TagIntroduce4Img1 = document.createElement('img')
main4TagIntroduce4Img1.id = 'purp1'
main4TagIntroduce4Img1.src = './docs/purp.png'
main4TagIntroduce4Img1.style = 'top: -187px; left:-9px ;'
main4TagIntroduce4.append(main4TagIntroduce4Img1)
//second img of third intro..
const main4TagIntroduce4Img2 = document.createElement('img')
main4TagIntroduce4Img2.id = 'spongebob'
main4TagIntroduce4Img2.src = './docs/spongebob.png'
main4TagIntroduce4.append(main4TagIntroduce4Img2)
//detail(p) of third intro..
const main4TagIntroduce4_Div = document.createElement('div')
main4TagIntroduce4_Div.id = 'alireza'
main4TagIntroduce4.append(main4TagIntroduce4_Div)
//following div has p*2
//first p 
const main4TagIntroduce4_DivP1 = document.createElement('p')
main4TagIntroduce4_DivP1.id = 'name4'
main4TagIntroduce4_DivP1.textContent = 'Alireza Noshad'
main4TagIntroduce4_Div.append(main4TagIntroduce4_DivP1)
//second p
const main4TagIntroduce4_DivP2 = document.createElement('p')
main4TagIntroduce4_DivP2.id = 'desc4'
main4TagIntroduce4_DivP2.textContent = 'a 21 Year-old Front End Developer From Iran.'
const main4TagIntroduce4_DivP3 = document.createElement("p")
main4TagIntroduce4_DivP3.id = "language1"
main4TagIntroduce4_DivP3.textContent = 'languages: Html, Css, Java Script'
main4TagIntroduce4_Div.append(main4TagIntroduce4_DivP2);
main4TagIntroduce4_Div.append(main4TagIntroduce4_DivP3)
////
//introduce ends
//main 4 ends
///main 5 begins

const main5Tag = document.createElement('div')
main5Tag.classList.add('main5')
containerTag.append(main5Tag)
//main 5 includes contact us section
const main5TagcontactUs = document.createElement('section')
main5TagcontactUs.id = 'contactUs'
main5Tag.append(main5TagcontactUs)
//contact us section includes top div(for top text) and rest div(for input and more inforamtion)
//top div (has span*2)
const main5TagcontactUsTopDiv = document.createElement('div')
main5TagcontactUsTopDiv.id = 'contact'
main5TagcontactUs.append(main5TagcontactUsTopDiv)
//first sapn
const main5TagcontactUsTopDivSpan1 = document.createElement('span')
main5TagcontactUsTopDivSpan1.textContent = 'CONTACT'
main5TagcontactUsTopDiv.append(main5TagcontactUsTopDivSpan1)
//second sapn
const main5TagcontactUsTopDivSpan2 = document.createElement('span')
main5TagcontactUsTopDivSpan2.textContent = 'US'
main5TagcontactUsTopDiv.append(main5TagcontactUsTopDivSpan2)
//rest div: a div for top of footer box(for text), and another div tha contains left div and right div for inputs and infotmation
//div with send email id that has addEventListener;; of footer box within it
const main5TagcontactUsFooterBox = document.createElement('div')
main5TagcontactUsFooterBox.id = 'sendEmail'
main5TagcontactUs.append(main5TagcontactUsFooterBox)
//top footer box div begins(div in div)
//outer div
const main5TagcontactUsFooterBox_Precenter = document.createElement('div')
main5TagcontactUsFooterBox_Precenter.id = 'precenter'
main5TagcontactUsFooterBox.append(main5TagcontactUsFooterBox_Precenter)
//inner div
const main5TagcontactUsFooterBox_Precenter_Center = document.createElement('div')
main5TagcontactUsFooterBox_Precenter_Center.id = 'center'
main5TagcontactUsFooterBox_Precenter_Center.textContent = "we'll be happy to hear from you."
main5TagcontactUsFooterBox_Precenter.append(main5TagcontactUsFooterBox_Precenter_Center)
///
///left div(input*3 btn*1) and right div(information) of footer box
///preLeftAndRight
const main5TagcontactUsFooterBox_preLeftAndRight = document.createElement('div')
main5TagcontactUsFooterBox_preLeftAndRight.classList.add('preLeftAndRight')
main5TagcontactUsFooterBox.append(main5TagcontactUsFooterBox_preLeftAndRight)
//left div(three inputs for name, email and their question or massage)
const main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv = document.createElement('div')
main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv.id = 'left'
main5TagcontactUsFooterBox_preLeftAndRight.append(main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv)
//first input(name)
const main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput1 = document.createElement('input')
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput1.id = 'name'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput1.placeholder = 'Name'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput1.type = 'text'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv.append(main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput1)
//second input(E-mail)
const main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput2 = document.createElement('input')
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput2.id = 'email'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput2.placeholder = 'Email'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput2.type = 'text'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv.append(main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput2)
//third input(Massage)
const main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput3 = document.createElement('input')
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput3.id = 'massage'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput3.placeholder = 'Massage'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput3.type = 'text'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv.append(main5TagcontactUsFooterBox_preLeftAndRight_LeftDivInput3)
//send button a 
const main5TagcontactUsFooterBox_preLeftAndRight_LeftDivA = document.createElement('a')
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivA.id = 'send'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivA.href = '#'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDivA.textContent = 'Send'
main5TagcontactUsFooterBox_preLeftAndRight_LeftDiv.append(main5TagcontactUsFooterBox_preLeftAndRight_LeftDivA)
///left div ends
///right div begins
//right div has div*3 within it (our address, our numbers, our email)
const main5TagcontactUsFooterBox_preLeftAndRight_Right = document.createElement('div')
main5TagcontactUsFooterBox_preLeftAndRight_Right.id = 'right'
main5TagcontactUsFooterBox_preLeftAndRight.append(main5TagcontactUsFooterBox_preLeftAndRight_Right)
//first div (our address) with p*2 within it
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1 = document.createElement('div')
main5TagcontactUsFooterBox_preLeftAndRight_Right.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1)
//first p
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P1 = document.createElement('p')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P1.id = 'address'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P1.textContent = 'Address'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P1)
//second p
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P2 = document.createElement('p')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P2.textContent = 'bushehr, Imam square, sangi street, bustan 1 allay'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div1P2)
//
//second div (our numbers) (p*1 , a*4)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2 = document.createElement('div')
main5TagcontactUsFooterBox_preLeftAndRight_Right.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2)
//its p(call us text)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2P = document.createElement('p')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2P.id = 'callUs'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2P.textContent = 'Call us'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2P)
//its first a (our numbers)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A1 = document.createElement('a')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A1.href = '#'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A1.textContent = '09109111088'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A1)
//its second a (our numbers)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A2 = document.createElement('a')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A2.href = '#'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A2.textContent = '09330888181'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A2)
//its third a (our numbers)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A3 = document.createElement('a')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A3.href = '#'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A3.textContent = '09903661079'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A3)
//its forth a (our numbers)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A4 = document.createElement('a')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A4.href = '#'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A4.textContent = '09363241408'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div2A4)
///
////third div (our E-mail) (p*1 , a*1)
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3 = document.createElement('div')
main5TagcontactUsFooterBox_preLeftAndRight_Right.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3)
//its p
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3P = document.createElement('p')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3P.id = 'help'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3P.textContent = 'help?'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3P)
//its a 
const main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3A = document.createElement('a')
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3A.href = '#'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3A.textContent = 'admin@gmail.com'
main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3.append(main5TagcontactUsFooterBox_preLeftAndRight_Right_Div3A)


