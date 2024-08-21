// Question:no:1
var city = prompt("Enter your city name!");
if(city == "Karachi" || city == "karachi" || city == "KARACHI"){
    alert("Welcome to city of lights")
}
// Question:no:2
var gender = prompt("Enter your gender");
if(gender == "male" || gender == "Male" || gender == "MALE"){
    alert("Good Morning Sir!")
}
else if(gender == "Female" || gender == "female" || gender == "FEMALE"){
    alert("Good Morning Maam!")
}
// Question:no:3
 var color = prompt("Write color of road traffic signal");

 if (color == "RED" || color == "Red" || color == "red") {
   alert("Must Stop");
 } else if (color == "YELLOW" || color == "Yellow" || color == "yellow") {
  alert("Ready to move");
 } else if (color == "GREEN" || color == "Green" || color == "green") {
  alert("Move now.");
 } else {
   alert("Please enter a right color of road traffic signal.");
 }
//  Question:no:4
var remeaningFule = prompt("Enter your fule quantity");
if (remeaningFule == 0.25){
    alert("Please refill your fule")
}
else if ( remeaningFule > 0.25){
    alert("You can drive with this quantity of fule")
}
// Question:no:5
// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b.
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
// f. 
if("car" < "cat"){
  alert("car is smaller than cat");
  }
  // Question:no:6
  var eng = Number.parseInt(prompt(`Enter your English subject marks`));
  var urdu = Number.parseInt(prompt(`Enter your Urdu marks`));
  var maths = Number.parseInt(prompt(`Enter your Maths marks`));
  var totalMarks = Number.parseInt(prompt(`Enter your total number`));
  var obtainedMarks = eng+urdu+maths;
  var percentage = (totalMarks/obtainedMarks) *100;
  var grade, remarks;
 if (percentage >= 80) {
     grade = 'A-one';
     remarks = (`Excellent`);
 } 
 else if (percentage >= 70) {
     grade = 'A';
     remarks = (`Good`);
 } 
 else if (percentage >= 60) {
     grade = 'B';
     remarks = (`You need to improve`);
 } 
 else {
     grade = 'Fail';
     remarks = (`Sorry`);
 }
 document.write(`<h1>Mats Sheet</h1><br>`);
 document.write(`Total marks: ${totalMarks}<br>`);
 document.write(`Marks obtained: ${obtainedMarks}<br>`);
 document.write(`Percentage: ${percentage}%<br>`);
 document.write(`Grade: ${grade}<br>`);
 document.write(`Remarks: ${remarks}`);

  // Question:no:7
  var secretnum = prompt("Guess the secret number?");
  if(secretnum == 7){
    alert("Bingo!You guess the right number.")
  }
else if(secretnum == +1){
  alert("Close enough to the correct answer.")
}
// Question:no:8
var no = parseInt(prompt(`Enter a number`));
 if (no % 3 === 0){
     alert(`The ${no} is divisible by 3 `);
 }
 else{
     alert(`The ${no} is not divisible by 3 `);
 }
//  Question:no:9
var no2 = parseInt(prompt(`Enter a Number`));
 if(no2 % 2 === 0){
     alert(`This is even ${no2} number.`);
 }
 else{
     alert(`This is odd ${no2} number.`);
 }
//  Question:no:10
 var weather = parseInt(prompt(`Enter the temprature of today`));

 if (weather >= 40){
     alert(`It's boiling today.`)
 }
 else if (weather >= 30){
     alert(`The weather id ordnairy today.`)
 }
 else if (weather >= 20){
     alert(`The wather is chilly today.`)
 }
 else if (weather >= 10){
       alert(`It's fridge today!.`)
 }
//  Question:no:11
// a.
var firstNo = parseFloat(prompt(`Enter the first number`));
// b.
var secondNo = parseFloat(prompt(`Enter the first number`));
// c. 
 var operation = prompt("Enter the operation (+, -, *, /, %):");
//  d.
 if (operation === "+") {
     alert("Result: " + (firstNo + secondNo));
 }
 else if (operation === "-") {
     alert("Result: " + (firstNo- secondNo));
 }
 else if (operation === "*") {
     alert("Result: " + (firstNo * secondNo));
 }
 else if (operation === "/") {
     if (secondNo !== 0) {
         alert("Result: " + (firstNo / secondNo));
     }
     else {
        alert("Error: Division by zero is not allowed.");
     }
 }
 else if (operation === "%") {
     if (secondNo !== 0) {
         alert("Result: " + (firstNo % secondNo));
     }
     else {
         alert("Error: Division by zero is not allowed.");
     }
 }
 else {
     alert("Invalid operation entered.");
 }
