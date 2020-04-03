var a = 8;
var b = "Jan";
var c;
console.log(a, b);
c = "C";
a++;

console.log('Hello ' + b);
console.log(a);
a--;
console.log(a);

a = a + 2 // adding 2 to a -> same as a+=2
console.log(a);

a+= 2 //adding 2 to a -> same as a = a + 2
console.log(a);

a-=2; // same as a = a - 2
console.log(a);

b = b + " \"Peter\"";
console.log(b);

b = b + ' "Radtke"';
console.log(b);

var hello = "hello";

console.log(hello + b);
console.log(hello, b);

var myString = "my first" + "my second"

console.log(myString);

var firstString = "the first string";
console.log(firstString);
firstString += "the second string";
console.log(firstString);

var secondString = "second bla";
var thirdString = "third bla";

secondString += thirdString;
console.log(secondString);

firstStringLength = firstString.length;

console.log(firstStringLength);

var firstLetterOfFirstString = firstString[0];
console.log(firstLetterOfFirstString);

var lastLetterOfAString = firstString[firstString.length -1];
console.log(lastLetterOfAString);

var array = [[1,2,3], [4,5,6], [7,8,9]];

console.log(array[1][2]); // show a six

var myArray = [
    {
        firstName: "Christina",
        lastName: "Lerche",
        birthDate: "19.05.1990"
    },
    {
        firstName: "Jan Peter",
        lastName: "Radtke",
        birthDate: "24.10.1988"
    }
];

console.log(myArray);

myArray.push( //add to the end off the array
    {
        firstName: "Klaudia",
        lastName: "Lerche",
        birthDate: "31.09.1958"
    }
)

console.log(myArray);

var Klaudia = myArray.pop(); //remove last item

console.log(Klaudia);
console.log(myArray);

var Chrissi = myArray.shift(); // remove first item
console.log(Chrissi);
console.log(myArray);

myArray.unshift( //add to the beginning of the array
    {
        firstName: "Elke",
        lastName: "Radtke",
        birthDate: "01.10.1957"
    }
);
console.log(myArray);

console.log(myArray[0].firstName, myArray[0].lastName, myArray[0].birthDate);
console.log(myArray[1].firstName, myArray[1].lastName, myArray[1].birthDate);

//Function test
function test (firstName, secondName, lastName) {
    var result = firstName + " " + secondName + " " + lastName;
    console.log(result);
}
var myFirstName = "Jan";
var mySecondName = "Peter";
var myLastName = "Radtke";
test(myFirstName, mySecondName, myLastName);



