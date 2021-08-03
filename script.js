//string declaration
let carName1 = "BMW S Class";
let carName2 = "BMW R Class";
document.getElementById("cardetails").innerHTML =
  "Output: " + carName1 + " " + carName2;

//primitive string declaration
let name1 = String("John Doe");
document.getElementById("constructor").innerHTML =
  "Output: " + name1 + " " + " Variable Type: " + name1.constructor;

//string length function
let randomname = "Gods Plans";
document.getElementById("length").innerHTML =
  "Size of the string is : " + randomname.length;

//string prototype

//properties
function Student(name, id, course) {
  this.name = name;
  this.id = id;
  this.course = course;
}

var student1 = new Student("John Doe", 007, "BSC");
document.getElementById("prototype1").innerHTML =
  "Function values before using prototype: " +
  student1.name +
  ", " +
  student1.id +
  ", " +
  student1.course;
Student.prototype.batch = 2021;
document.getElementById("prototype2").innerHTML =
  "Function values after using prototype: " +
  student1.name +
  ", " +
  student1.id +
  ", " +
  student1.course +
  ", " +
  student1.batch;

//method
Student.prototype.genratecertificate = function () {
  let certificates =
    "Hello " +
    student1.name +
    " You Have Successfully Passed In " +
    student1.course +
    " For the Batch " +
    student1.batch;
  document.getElementById("prototype3").innerHTML = certificates;
};
student1.genratecertificate();

//string methods

//charat

let charstring = String("Avengers");
document.getElementById("charat").innerHTML =
  "Declared String is " +
  charstring +
  " 4th Charachter of the string is " +
  charstring.charAt(3);

//charcodeat

let charcodestring = String("BatMan");
document.getElementById("charcodeat").innerHTML =
  "Declared string is " +
  charcodestring +
  " Unicode of 5th char is " +
  charcodestring.charCodeAt(5);

//concat
let firstname = String("Joey ");
let lastname = String("Tribbiani");
let fullname = firstname.concat(lastname);
document.getElementById("concat").innerHTML =
  "First Name " +
  firstname +
  " Last Name " +
  lastname +
  " Full Name " +
  fullname;

//endwith

let searchstring = String("hello this is search string consist of term google");
console.log(searchstring.endsWith("google")); //this will return true
console.log(searchstring.endsWith("Google")); //this will return false

//fromcharcode

let charcode = String.fromCharCode(76);
console.log(charcode);

//include

let searchquery =
  "The numbers in the table specify the first browser version that fully supports the method.";
console.log(searchquery.includes("version")); // this will return true

//indexof()

let indexstring = String("Random String Random String Twice");
document.getElementById("indexof").innerHTML =
  "Position of the Matched String is: " + indexstring.indexOf("String");

//lastIndexOf()

let lastindexstring = String("Random String Random String Twice");
document.getElementById("lastindexof").innerHTML =
  "Position of the Matched String is:" + lastindexstring.lastIndexOf("String");

//localcompare()

let localstring1 = String("John");
let localstring2 = String("Doe");
let localstring3 = String("John");
let localstring4 = String("doe");

document.getElementById("localecompare").innerHTML =
  "Output: " +
  localstring1.localeCompare(localstring2) +
  " " +
  localstring1.localeCompare(localstring3) +
  " " +
  localstring2.localeCompare(localstring1);

//match

let matchstring = String(
  "I felt happy because I saw the others were happy and because I knew I should feel happy, but I wasn’t really happy"
);

document.getElementById("match").innerHTML =
  "Provided String: " +
  matchstring +
  " " +
  "<br>" +
  "Match in strings: " +
  matchstring.match(/ppy/g);

//repeat

let repeatstring = String("Hold The Door ");
document.getElementById("repeat").innerHTML =
  "Delcared String: " +
  repeatstring +
  "<br>" +
  "Repeated String: " +
  repeatstring.repeat(6);

//replace
let replacestring = String("John Doe");
document.getElementById("replace").innerHTML =
  "Declared String: " +
  replacestring +
  "<br>" +
  "String after using replace(): " +
  replacestring.replace("Doe", "Reese");

//search

let searchstring1 = String(
  "Sadly, in the next 18 minutes when I do our chat, four Americans that are alive will be dead from the food that they eat."
);
document.getElementById("search").innerHTML =
  "Search String: " +
  searchstring1 +
  "<br>" +
  "Search Result: " +
  searchstring1.search("minutes");

//slice

let slicestring = String("Finger-Lickin Good");
document.getElementById("slice").innerHTML =
  "Declared String: " +
  slicestring +
  "<br>" +
  "String After Slice Method: " +
  slicestring.slice(0, 13);

//split
let splitstring = String("Diamonds Are Forever");
document.getElementById("split").innerHTML =
  "Declared String: " +
  splitstring +
  "<br>" +
  "String after using split method: " +
  splitstring.split(" ");

//startwith
let startwithstring = String("Just Do It");
document.getElementById("startwith").innerHTML =
  "Declared String: " +
  startwithstring +
  "<br>" +
  "Result After Using Startwith: " +
  startwithstring.startsWith("J") +
  "," +
  startwithstring.startsWith("D");

//substr

let substr1 = String("Think Different");

document.getElementById("substr").innerHTML =
  "Declared String: " +
  substr1 +
  "<br>" +
  "String after using substr: " +
  substr1.substr(5, 20);

//substring

let substring2 = String("Imagination at Work");
document.getElementById("substring").innerHTML =
  "Declared String: " +
  substring2 +
  "<br>" +
  "String after Substring: " +
  substring2.substring(2, 34);

//tolocalelowercase

let localstring5 = String("Just Do It");
document.getElementById("tolocalelower").innerHTML =
  "Declared String: " +
  localstring5 +
  "<br>" +
  "String After Using localelowercase method: " +
  localstring5.toLocaleLowerCase();

//tolocaleuppercase

let localstring6 = String("I’m Lovin’ It");
document.getElementById("tolocaleupper").innerHTML =
  "Declared String: " +
  localstring6 +
  "<br>" +
  "String After Using localeuppercase Method: " +
  localstring6.toLocaleUpperCase();

// javascript numbers starts from here

var number = 34343;
var number2 = 67.98;
document.getElementById("numberfield").innerHTML =
  "Declared Number: " + number + "<br>" + "Decimal Variable: " + number2;

//javascript number constructor

let marks = 1245;
document.getElementById("numconstructor").innerHTML =
  "Constructor Type: " + marks.constructor;

//max value

document.getElementById("maxvalue").innerHTML =
  "Max Number: " + Number.MAX_VALUE;

//min value

document.getElementById("minvalue").innerHTML =
  "Min Number: " + Number.MIN_VALUE;

//negative infinity
negtivenumber = -23232;
document.getElementById("neginfi").innerHTML =
  "Nagative_Infinity: " + Number.NEGATIVE_INFINITY;

//nan

document.getElementById("nan").innerHTML = "Output: " + Number.NaN;

//positive infinity
document.getElementById("posinfi").innerHTML =
  "Positive_Infinity Output: " + Number.POSITIVE_INFINITY;

//number prototype

function bankaccount(currentaccount, savingaccount) {
  this.currentaccount = currentaccount;
  this.savingaccount = savingaccount;
}

let account1 = new bankaccount(343434, 534533);

document.getElementById("numberprototype1").innerHTML =
  "Bank Account Properties Before Using Protoype Method : " +
  account1.savingaccount +
  ", " +
  account1.currentaccount;

bankaccount.prototype.demataccount = 32321;

document.getElementById("numberprototype2").innerHTML =
  "Bank Account Properties Before Using Protoype Method : " +
  account1.currentaccount +
  ", " +
  account1.savingaccount +
  ", " +
  account1.demataccount;

bankaccount.prototype.totalbal = function () {
  sum = this.currentaccount + this.demataccount + this.currentaccount;
  document.getElementById("numberprototype3").innerHTML =
    "Bank Account After Using Prototype Method: " + sum;
};

account1.totalbal();

//number methods

// infinite

let finitenumber1 = Number(4334);
let finitenumber2 = Number(-2.5);
let finitenumber3 = Number(5 - 3);
let finitenumber4 = Number(0);
let finitestring = String("John");

document.getElementById("isfinite").innerHTML =
  "Declared Variables: " +
  finitenumber1 +
  ", " +
  finitenumber2 +
  ", " +
  finitenumber3 +
  ", " +
  finitenumber4 +
  ", " +
  finitestring +
  "<br>" +
  "Output: " +
  Number.isFinite(finitenumber1) +
  ", " +
  Number.isFinite(finitenumber2) +
  ", " +
  Number.isFinite(finitenumber3) +
  ", " +
  Number.isFinite(finitenumber4) +
  ", " +
  Number.isFinite(finitestring);

//isinteger()
let intvalue1 = Number(4324);
let intvalue2 = Number(4.6);
let intvalue3 = Number(-4324);
let stringval = String("Test");

document.getElementById("isinteger").innerHTML =
  "Declared Variables: " +
  intvalue1 +
  ", " +
  intvalue2 +
  ", " +
  intvalue3 +
  ", " +
  stringval +
  "<br>" +
  "Output: " +
  Number.isInteger(intvalue1) +
  "," +
  Number.isInteger(intvalue2) +
  ", " +
  Number.isInteger(intvalue3) +
  ", " +
  Number.isInteger(stringval);

//isnan()

let isnannumber1 = Number(434);
let isnannumber2 = Number(4.6);
let isnannumber3 = Number(-4324);
let stringval1 = String("Test");
let nanval = NaN;

document.getElementById("isnan").innerHTML =
  "Declared Variables: " +
  isnannumber1 +
  ", " +
  isnannumber2 +
  ", " +
  isnannumber3 +
  ", " +
  stringval1 +
  ", " +
  nanval +
  "<br>" +
  "Output: " +
  Number.isNaN(isnannumber1) +
  "," +
  Number.isNaN(isnannumber2) +
  ", " +
  Number.isNaN(isnannumber3) +
  ", " +
  Number.isNaN(stringval1) +
  ", " +
  Number.isNaN(nanval);

//issafeinteger()

let issafenumber1 = Number(434);
let issafenumber2 = Number(4.6);
let issafenumber3 = Number(-4324);
let stringval3 = String("Test");
let nanval1 = NaN;

document.getElementById("issafeint").innerHTML =
  "Delcared Output: " +
  issafenumber1 +
  ", " +
  issafenumber2 +
  ", " +
  isnannumber3 +
  ", " +
  stringval3 +
  ", " +
  nanval1 +
  "<br>" +
  "Output: " +
  Number.isSafeInteger(issafenumber1) +
  ", " +
  Number.isSafeInteger(issafenumber2) +
  ", " +
  Number.isSafeInteger(issafenumber3) +
  ", " +
  Number.isSafeInteger(stringval3) +
  ", " +
  Number.isSafeInteger(nanval1);

//toexpotential()

let exponumber = Number(434.5);

document.getElementById("toexponential").innerHTML =
  "Declared Variable: " +
  exponumber +
  "<br>" +
  "Output: " +
  exponumber.toExponential();

//tofixed

let decimalnum = Number(43.777);

document.getElementById("tofixed").innerHTML =
  "Declared Variable: " +
  decimalnum +
  "<br>" +
  "Output: " +
  decimalnum.toFixed(2);

//tostring

var stringnum = new Number(3434343);

document.getElementById("tolocalestring").innerHTML =
  "Declared Variable: " +
  stringnum +
  "<br>" +
  "Output: " +
  stringnum.toLocaleString();

//toprecision

var prenum = 32.4343;

document.getElementById("toprecision").innerHTML =
  "Declared Variable: " + prenum + "<br>" + "Output: " + prenum.toPrecision(3);

//tostring

var numstring = 3435;

document.getElementById("tostring").innerHTML =
  "Declared Variable: " +
  numstring +
  "<br>" +
  "Output: " +
  numstring.toString();

//valueof

var premitivenum = 34;

document.getElementById("valueof").innerHTML =
  "Declared Variable: " +
  premitivenum +
  "<br>" +
  "Output: " +
  premitivenum.valueOf();

//math object starts from here

var pival = Math.PI;
var squareroot65 = Math.sqrt(65);
document.getElementById("mathobject").innerHTML =
  "Output: " + pival + ", " + squareroot65;

//e

document.getElementById("e").innerHTML = "Output: " + Math.E;

//ln2

document.getElementById("ln2").innerHTML = "Output: " + Math.LN2;

//ln10

document.getElementById("ln10").innerHTML = "Output: " + Math.LN10;

//log2e

document.getElementById("log2e").innerHTML = "Output: " + Math.LOG2E;

//log10e

document.getElementById("log10e").innerHTML = "Output: " + Math.LOG10E;

//pi

document.getElementById("pi2").innerHTML = "Output: " + Math.PI;

// SQRT1_2

let sqrt_val = Math.SQRT1_2;
document.getElementById("sqrt12").innerHTML = "Output: " + sqrt_val;

//sqrt2

let sqrt_val2 = Math.SQRT2;
document.getElementById("sqrt2").innerHTML = "Output: " + sqrt_val2;

//boolean
var bolnum1 = Number(34);
var bolnum2 = Number(35);

document.getElementById("bol").innerHTML =
  "Output: " + Boolean(bolnum1 > bolnum2) + "," + Boolean(bolnum2 > bolnum1);

//bol contructor

let boolval = false;

document.getElementById("bolcon").innerHTML = "Output: " + boolval.constructor;

//prototype

Boolean.prototype.favfood = function () {
  if (this.valueOf() == true) {
    return "Burger";
  } else {
    return "Pizza";
  }
};

let bolprotoval = true;

document.getElementById("bolprototype").innerHTML =
  "Output: " + bolprotoval.favfood();

//tostring

let answer = true;
stringbol = answer.toString();
document.getElementById("tostringval").innerHTML =
  "Output: " + stringbol + "<br>" + "Variable Type: " + stringbol.constructor;

//valueof

let bolvalueof1 = false;
bolvalueof2 = bolvalueof1.valueOf();
document.getElementById("valueoff").innerHTML = "Output: " + bolvalueof2;

//array

const foodmenu = ["Burger", "Pizza", "Butter Chicken", "Sandwich", "Pasta"];

document.getElementById("arraydemo").innerHTML = "Output: " + foodmenu;


//array constructor

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arraycon").innerHTML = "Output: " +  fruits.constructor;

//array lenght

document.getElementById("arraylen").innerHTML = "Output: " + fruits.length;


//array prototype
Array.prototype.uppercasecus = function(){
    for (let i =0; i<this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

fruits.uppercasecus();

document.getElementById("arrayproto").innerHTML = "Output: " + fruits; 


//concat

const breakfastmenu = ["Pan-Cake", "Cereals", "Salad"];
const lunch = ["Pasta", "Burger", "Pizza"];
const menu = breakfastmenu.concat(lunch);
document.getElementById("arrayconcat").innerHTML = "Output: " + menu;

//copywithin

document.getElementById("copywithinf").innerHTML = "Output: " + lunch.copyWithin(2,0);


//enteries
const empname = ["John", "Stephen", "Rajat", "Judy"];
const f = empname.entries();

for (let x of f){
    document.getElementById("enteriesf").innerHTML +=x + "<br>"; 
}

//every

const agegroup1 = [32, 53, 43, 20, 16];
const agegroup2 = [42, 54, 21, 45];

document.getElementById("everyfil1").innerHTML = "Output: " + agegroup1.every(checkAge);
document.getElementById("everyfil2").innerHTML = "Output: " + agegroup2.every(checkAge);
function checkAge(age) {
  return age > 18;
  }

//fill()

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fill1").innerHTML= "Output: " + fruits1.fill("Stawberry");

//filter

document.getElementById("filter1").innerHTML = "Output: " +  agegroup1.filter(checkAge);

//find

const agegroup3 = [12, 43, 34, 2, 9];

document.getElementById("find1").innerHTML = "Output: " + agegroup3.find(checkAge);

//findIndex()

document.getElementById("findindex1").innerHTML = "Output: " + agegroup3.findIndex(checkAge);


//forEach()

let text = "";
fruits.forEach(fruitFunction);
document.getElementById("foreach1").innerHTML = "Output: " + "<br>" +  text;
function fruitFunction(item,index) {
  text += index + ": " + item + "<br>";
 }


//from()

const myarray = Array.from("ABCDEFG");
document.getElementById("form1").innerHTML = "Output: " + myarray;


//includes()

const favfruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("include1").innerHTML = "Output: " + favfruits.includes("Mango");
document.getElementById("include2").innerHTML = "Output: " + favfruits.includes("MANGO");


//indexpf()

document.getElementById("indexof1").innerHTML = "Output: " + favfruits.indexOf("Apple");


//isarray()

var breakfastfruit = "Banana";
document.getElementById("isarray1").innerHTML = "Output: " + Array.isArray(favfruits) + " " + Array.isArray(breakfastfruit);


//join()

document.getElementById("join1").innerHTML = "Output: " + favfruits.join();


//keys()

const arraykeys = favfruits.keys();
keyfile = "";

for (let p of arraykeys) {
  keyfile += p + "<br>";
}
document.getElementById("keys1").innerHTML = "Output: " + keyfile;


//lastIndexOf()

const favfruit = ["Apple", "Orange", "Apple", "Mango"];

document.getElementById("lastindexof1").innerHTML = "Output: " + favfruit.lastIndexOf("Apple");

//map()

const randomarray = [4, 5, 6, 15, 25];
const newarray = randomarray.map(Math.sqrt);

document.getElementById("map1").innerHTML = "Output: " + newarray;

//pop()

document.getElementById("pop1").innerHTML = "Array Before POP(): " + randomarray + "<br>" +"POPED Value: " + randomarray.pop() + "<br>" +"Array After POP(): " + randomarray;


//push()

document.getElementById("push1").innerHTML = "Array Before Push:" + randomarray + ", " + "Pushed Value In Array: 34 " + "," + "Value Pushed On Index: " + randomarray.push(34) + ", " + "Array After Pushed Value: " + randomarray;