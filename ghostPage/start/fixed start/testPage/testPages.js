// Question divs References
const question1 = document.getElementById('whole1');
const question2 = document.getElementById('whole2');
const question3 = document.getElementById('whole3');
const question4 = document.getElementById('whole4');
const question5 = document.getElementById('whole5');
const question6 = document.getElementById('whole6');
const question7 = document.getElementById('whole7');
const question8 = document.getElementById('whole8');
const question9 = document.getElementById('whole9');
const question10 = document.getElementById('whole10');
const question11 = document.getElementById('whole11');
const question12 = document.getElementById('whole12');
const question13 = document.getElementById('whole13');
const question14 = document.getElementById('whole14');
const question15 = document.getElementById('whole15');
const question16 = document.getElementById('whole16');
const question17 = document.getElementById('whole17');
const question18 = document.getElementById('whole18');
const question19 = document.getElementById('whole19');
const question20 = document.getElementById('whole20');
const question21 = document.getElementById('whole21');
const question22 = document.getElementById('whole22');
const question23 = document.getElementById('whole23');
const question24 = document.getElementById('whole24');
const question25 = document.getElementById('whole25');
const question26 = document.getElementById('whole26');
const question27 = document.getElementById('whole27');
const question28 = document.getElementById('whole28');
const question29 = document.getElementById('whole29');
const question30 = document.getElementById('whole30');





//
const container = document.getElementsByClassName('container')
const main = document.querySelector('.main')
const loadingDiv = document.getElementById('loadingDiv')



// Array to store values
let valueArray = [];
// Array to store Qs
const questionDisplayConuter = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20,question21,question22,question23,question24,question25,question26,question27,question28,question29,question30];
// Q index(used in function)
let questionDisplayIndex = 0;
/// funtion for image onclick attributes..
//
function ImageClickFunction(meownigggga) {
    // check if selected img is corret on incorrect
    if (meownigggga === 'trueImg') {
        // if selected img is coorect, add a True string to myValue array(answers)
        valueArray.push('True');
    } else {
        // Otherwise, add a False string to myValue array(answers)
        valueArray.push('False')
    }
    //hide current Display
    questionDisplayConuter[questionDisplayIndex].style.display = 'none';
    //and +1 the Q index(used for following if)
    questionDisplayIndex++;
    // check if there are no  more Q show the next Q
    if (questionDisplayIndex < questionDisplayConuter.length ) {
        //show the next Q
        questionDisplayConuter[questionDisplayIndex].style.display = 'block';
    } else {
        // if there are no more Q remaining..
        //// first- calculate iq score using mathematical formula
        /// 1.we need to find out how many false and how many true we got from answers
        let trueCount = 0;
        let falseCount = 0;
        for (let i = 0; i < valueArray.length; i++) {
            if (valueArray[i] === 'True') {
                // if the following index of myValue array(answers) is True, add +1 to trueCount
                trueCount++
            } else {
                // Otherwise, add +1 to falseCount
                falseCount++
            }    
        }
        /// 2.we need to put following put it in the formula
        //
        // Calculate Raw Score (forexample: 69% correct )
        let rawScore = (trueCount / 30) * 100;
        // Calculate IQ Score
        let preiqScore = 100 + ((rawScore - 100) / 15) * 15;
        //rounding the final number..
        let iqScore = preiqScore.toFixed(1)
        //
        //// second- log and send calculate iq score(number) to result page
        // log...
        console.log('IQ Score: ', iqScore);
        //send..
        localStorage.setItem('iqScore', iqScore);
        //// third- go to loading page
        setTimeout(() => {
            main.style = 'display:none'
        }, 10);
        setTimeout(() => {

            loadingDiv.style = 'opacity:0.1 ; display:flex'
            
            setTimeout(() => {
                loadingDiv.style = 'opacity:0.2 ; display:flex'

                setTimeout(() => {
                    loadingDiv.style = 'opacity:0.3 ; display:flex'

                    setTimeout(() => {
                        loadingDiv.style = 'opacity:0.4 ; display:flex'

                        setTimeout(() => {
                            loadingDiv.style = 'opacity:0.5 ; display:flex'

                            setTimeout(() => {
                                loadingDiv.style = 'opacity:0.6 ; display:flex'

                                setTimeout(() => {
                                    loadingDiv.style = 'opacity:0.7 ; display:flex'

                                    setTimeout(() => {
                                        loadingDiv.style = 'opacity:0.8 ; display:flex'

                                        setTimeout(() => {
                                            loadingDiv.style = 'opacity:0.9 ; display:flex'

                                            setTimeout(() => {
                                                loadingDiv.style = 'opacity:1 ; display:flex'

                                                setTimeout(() => {
                                                loadingDiv.style = 'opacity:1 ; display:flex'
                                                }, 20000);
                                            }, 540);
                                        }, 505);
                                    }, 360);
                                }, 320);
                            }, 270);
                        }, 220);
                    }, 170);
                }, 120);
            }, 70);
        }, 20);
        // forth- go to result page
        setTimeout(() => {
            window.location.href = './result/fixed result/result.html';
        }, 9500);

    }
}
// function ends




