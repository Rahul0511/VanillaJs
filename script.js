//string declaration
let carName1 = "BMW S Class";
let carName2 = "BMW R Class";
document.getElementById("cardetails").innerHTML = "Output: " + carName1 + " " + carName2;

//primitive string declaration
let name1 = String('John Doe');
document.getElementById("constructor").innerHTML = "Output: " + name1 + " " + " Variable Type: " + name1
    .constructor;

//string length function
let randomname = "Gods Plans";
document.getElementById("length").innerHTML = "Size of the string is : " + randomname.length;

//string prototype

//properties
function Student(name, id, course) {
    this.name = name;
    this.id = id;
    this.course = course;
}

var student1 = new Student("John Doe", 007, "BSC");
document.getElementById('prototype1').innerHTML = "Function values before using prototype: " + student1.name + ", " + student1.id + ", " + student1.course;
Student.prototype.batch = 2021;
document.getElementById('prototype2').innerHTML = "Function values after using prototype: " + student1.name + ", " + student1.id + ", " + student1.course + ", " + student1.batch;

//method
Student.prototype.genratecertificate = function () {
    let certificates = "Hello " + student1.name + " You Have Successfully Passed In " + student1.course + " For the Batch " + student1.batch;
    document.getElementById("prototype3").innerHTML = certificates;
}
student1.genratecertificate();

//string methods

//charat

let charstring = String("Avengers");
document.getElementById("charat").innerHTML = "Declared String is " + charstring + " 4th Charachter of the string is " + charstring.charAt(3);

//charcodeat

let charcodestring = String("BatMan");
document.getElementById("charcodeat").innerHTML = "Declared string is " + charcodestring + " Unicode of 5th char is " + charcodestring.charCodeAt(5);

//concat
let firstname = String("Joey ");
let lastname = String("Tribbiani");
let fullname = firstname.concat(lastname);
document.getElementById("concat").innerHTML = "First Name " + firstname + " Last Name " + lastname + " Full Name " + fullname;

//endwith

let searchstring = String("hello this is search string consist of term google");
console.log(searchstring.endsWith('google')); //this will return true 
console.log(searchstring.endsWith("Google")); //this will return false 

//fromcharcode

let charcode = String.fromCharCode(76);
console.log(charcode);

//include

let searchquery = "The numbers in the table specify the first browser version that fully supports the method.";
console.log(searchquery.includes('version')); // this will return true

//indexof()

let indexstring = String("Random String Random String Twice");
document.getElementById("indexof").innerHTML = "Position of the Matched String is: " + indexstring.indexOf("String");

//lastIndexOf()

let lastindexstring = String("Random String Random String Twice");
document.getElementById("lastindexof").innerHTML = "Position of the Matched String is:" + lastindexstring.lastIndexOf("String");

//localcompare()

let localstring1 = String("John");
let localstring2 = String("Doe");
let localstring3 = String("John");
let localstring4 = String("doe");

document.getElementById("localecompare").innerHTML = "Output: " + localstring1.localeCompare(localstring2) +" " + localstring1.localeCompare(localstring3) + " " + localstring2.localeCompare(localstring1);

//match

let matchstring = String("I felt happy because I saw the others were happy and because I knew I should feel happy, but I wasn’t really happy");

document.getElementById("match").innerHTML = "Provided String: "+ matchstring + " " + "<br>"+ "Match in strings: "+matchstring.match(/ppy/g);

//repeat

let repeatstring = String("Hold The Door ");
document.getElementById("repeat").innerHTML = "Delcared String: " + repeatstring + "<br>" + "Repeated String: " + repeatstring.repeat(6);

//replace
let replacestring = String("John Doe")
document.getElementById("replace").innerHTML = "Declared String: " + replacestring +"<br>"+ "String after using replace(): " + replacestring.replace("Doe", "Reese");

//search

let searchstring1 = String("Sadly, in the next 18 minutes when I do our chat, four Americans that are alive will be dead from the food that they eat.");
document.getElementById("search").innerHTML = "Search String: " + searchstring1 + "<br>"+ "Search Result: " + searchstring1.search("minutes");

//slice

let slicestring = String("Finger-Lickin Good"); 
document.getElementById("slice").innerHTML = "Declared String: " + slicestring + "<br>" + "String After Slice Method: " + slicestring.slice(0,13);


//split
let splitstring = String("Diamonds Are Forever");
document.getElementById("split").innerHTML= "Declared String: " + splitstring + "<br>" + "String after using split method: " + splitstring.split(" ");

//startwith
let startwithstring = String("Just Do It");
document.getElementById("startwith").innerHTML = "Declared String: " + startwithstring + "<br>" + "Result After Using Startwith: " + startwithstring.startsWith("J") + "," + startwithstring.startsWith("D");

//substr

let substr1 = String("Think Different");

document.getElementById("substr").innerHTML = "Declared String: " + substr1 + "<br>" + "String after using substr: " + substr1.substr(5,20);

//substring

let substring2 = String("Imagination at Work");
document.getElementById("substring").innerHTML = "Declared String: " + substring2 + "<br>" + "String after Substring: " + substring2.substring(2,34);

//tolocalelowercase

let localstring5 = String("Just Do It");
document.getElementById("tolocalelower").innerHTML = "Declared String: " + localstring5 + "<br>" + "String After Using localelowercase method: " + localstring5.toLocaleLowerCase();


//tolocaleuppercase

let localstring6 = String("I’m Lovin’ It");
document.getElementById("tolocaleupper").innerHTML = "Declared String: " + localstring6 + "<br>" + "String After Using localeuppercase Method: "+localstring6.toLocaleUpperCase();


