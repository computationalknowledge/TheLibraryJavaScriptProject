// this is my JavaScript code file

const startNumber = 100;
const endNumber = -13;
const stepNumber = 4;
var currentNumber = startNumber;

function a(a_currentNumber, a_endNumber, a_stepNumber) {
    var sum = 0;
    for (; a_currentNumber >= a_endNumber;) {
        a_currentNumber -= a_stepNumber;
        if (a_currentNumber < 50) {
            break;
            console.log("I'm out of here");
        }
        sum += a_stepNumber;
    }
    return sum;
}
console.log("the sum of all the stepped over numbers is ", a(currentNumber, endNumber, stepNumber));
