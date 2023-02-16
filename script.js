// function sayHi() {
//     console.log("hi")
// }

// sayHi();

// function greet(greeting) {
//   //parameter
//   console.log(greeting);
// }

// greet("hello"); //argument
// greet("hi");
// greet("moin");
// greet("servus");

// (function (day) {
//   console.log(day);
// })("Thursday");

//get the element from the dom
const button = document.getElementById("change-button");

//create event handler that is executed when the event occurs
function changeHeading() {
  //get the h1 from the dom
  const heading = document.getElementById("heading");
  heading.innerText = "Let's take a break!!!!!!!1";
}

//add an eventlistener to th button, that listens to click
//and calls the event handler
button.addEventListener("click", changeHeading);
