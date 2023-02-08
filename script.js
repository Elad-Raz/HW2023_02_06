let name = prompt("what is your name?");

let gender = prompt("please enter your gender");
if (gender === "male" || gender === "female") {
  if (gender === "male") {
    alert("ברוך הבא " + name);
  }
  if (gender === "female") {
    alert("ברוכה הבאה " + name);
  }
} else {
  alert("please write your gender correctly");
}
let email = prompt("enter your email address");
let newsletter = confirm("would you like to subscribe to our newsletter?");
if (newsletter === true) {
  alert("thank you, your email" + " " + email + " " + "was registered");
} else {
  alert("your lost");
}

let age = prompt("please enter your age");
if (!isNaN(age)) {
  if (age >= 0 && age <= 10) {
    alert("extra small");
  }
  if (age >= 11 && age <= 20) {
    alert("small");
  }
  if (age >= 21 && age <= 40) {
    alert("medium");
  }
  if (age >= 41 && age <= 80) {
    alert("large");
  }
  if (age >= 81 && age <= 119) {
    alert("extra large");
  }
  if (age >= 120) {
    alert("dead!");
  }
}
if (isNaN(age)) {
  alert("please enter your age correctly");
}
