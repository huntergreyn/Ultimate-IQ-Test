// Question divs References
const question1 = document.getElementById('whole1');
const question2 = document.getElementById('whole2');
const question3 = document.getElementById('whole3');
const question4 = document.getElementById('whole4');
const question5 = document.getElementById('whole5');


// Array to store values
let valueArray = [];
// Array to store Qs
const questionDisplayConuter = [question1,question2,question3,question4,question5];
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
        //// third- go to result page
        window.location.href = './result/fixed result/result.html';
    }
}





