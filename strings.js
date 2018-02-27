//Challenge One
var numOfSandwiches = 4*2;
console.log ("numOfSandwiches", numOfSandwiches);

//Challenge Two
var name = "Corey"
var string = "Hello, " + name + " how are you doing today?"
console.log("string ", string);

//Challenge Three
var DNA = "GCAT"
var RNA = DNA.replace(/T/g, "U")
console.log("RNA", RNA);

//Challenge Four
//var animal = "rabbit";
//var animal = "alligator";
//var animal = "turtle";
var animal = "ALligAtOR";
//var animal = "Rhino";

if (animal.toLowerCase()  === "alligator"){
    // debugger;
    console.log("small");
 } else {
    console.log("wide");
}

var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";
var myDiv = document.getElementById("basket");
myDiv.innerHTML = domString;