
//string declaration
let carName1 = "BMW S Class";
let carName2 = "BMW R Class";
document.getElementById("cardetails").innerHTML = "Output: " + carName1 + " " + carName2;

//primitive string declaration
let name = String('John Doe');
document.getElementById("constructor").innerHTML = "Output: " + name + " " + " Variable Type: " + name
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
console.log(searchquery.includes('version'));



