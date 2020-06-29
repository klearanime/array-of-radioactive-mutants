/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr) {
  arr.push('Colin')
}

function addMeToStart(arr) {
  arr.unshift('Colin')
}

function changeLast(arr) {
  arr.pop();
  arr.push(5);
}

function changeAllValuesTo(arr, val) {
  arr.slice(arr)
  arr.push(15)
}

function oddOrEven() {
  
}

function changeNextThreeToValue() {

}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
