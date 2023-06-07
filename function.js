function nameOfFunction(name) {
  console.log('You are running code present inside the function');
}
nameOfFunction();
nameOfFunction();

Function expression

let fun = function () {
  console.log('this is  function expression');
};
fun();

//passing values (Argument and Parameter )

let invidations = function (name) {
  console.log(`Welcome to ${name} in vacation in our event`);
};

invidations('Krishna');

//Returning the value from the function

let ageCalculations = function (birthYear, curentyear = 2023) {
  let age = curentyear - birthYear;
  //   console.log(`Your current age is= ${age}`);
  return age;
};
console.log(ageCalculations(2005));

//Single line arrow function

const invitation = (name) => `Welcome ${name} to the event`;
console.log(invitation('Ram'));

//Passing function as an Argument (High Order function example )

let upperCase = function (str) {
  return str.toUpperCase();
};
let lowerCase = function (str) {
  return str.toLowerCase();
};
let transformer = function (str, fun) {
  return fun(str);
};
console.log(transformer('Helllo', upperCase));

//Hosting;

test();
function test() {
  console.log('Larning is earning');
}
