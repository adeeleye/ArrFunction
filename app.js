let sum = 5 + 10; // Result: 15
  let message = 'Hello' + ' ' + 'world'; // Result: 'Hello world'
sum = 4 + 31;
console.log('result',sum)
console.log('result',message)
let difference = 20 - 8; // Result: 12
  let product = 5 * 4; // Result: 20
  let quotient = 15 / 3; // Result: 5
  console.log('result',difference)
  console.log('result',product)
  console.log('result',quotient)
  let remainder = 10 % 3;
  console.log('result',remainder)
  let x = 10
  let y = 20
  sum = x + y
  console.log('result',sum)
  let b = 452
  let a = 21
  product = a * b
  console.log('result',product)
  let counter = 5
  counter++
  console.log('result',counter)
  let isTrue = true;
  let isFalse = false;
  let logicalAnd = isTrue && isFalse; // Result: false
  let logicalOr = isTrue || isFalse; // Result: true
  let logicalNot = !isTrue; // Result: false
  console.log('result',isTrue)
  console.log('result',isFalse)
  console.log('result',logicalAnd)
  console.log('result',logicalOr)
  console.log('result',logicalNot)
  let age = 17;
  let allowed = (age >= 18)
  console.log('result',allowed)
  let year = 19;
  let accept = (year >= 18)
  console.log('result',accept)
  let isequal = 5 == '5'
  let isnotequal = 25 == '5 * 5'
console.log('result',isequal)
console.log('result',isnotequal)
let birth = 15
let allow = (birth >= 18) ? 'allow' : 'not allow'
console.log('result',allow)
let z = 95;
X = z
z += 5;
console.log('result',z)
let num = -2;
if (num > 0) {
  console.log('Number is positive');
} else {
  console.log('Number is not positive')
}
let hour = 21;
if (hour < 12) {
  console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}
let day = 'Friday';
switch (day) {
  case 'Monday':
    console.log('Start of the week');
    break;
  case 'Tuesday':
    console.log('Second day of the week');
    break;
  case 'Wednesday':
    console.log('Middle of the week');
    break;
  case 'Friday' :
   console.log('Muslims Day');
    default:
    console.log('Another day of the week');
}
   
function add(a, b) {
  return a + b;
}  
const result =add(3 , 5) 
console.log(result)

function square(x) {
return x * x;
}
const answer = square(8)
console.log(answer)
console.log("Hello, " + greet + "!");
function greet(name = "Guest") {
}
greet("John");  
greet();