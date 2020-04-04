//while loop

var myArray = [];

i = 0;

while (i < 5) {

    myArray.push(i);
    i++;

};

console.log(myArray);

// for loop
var ourArray = [];

for (i = 1; i < 6; i++) {
    ourArray.push(i);
}

console.log(ourArray);

// Give mee odd numbers till 11

var oddArray = [];

for (i = 1; i <= 11; i +=2) {
    oddArray.push(i);
}

console.log(oddArray);

// add numbers from an array

var numberArray = [1,2,3,4,5,6,7,8,9,10];
var total = 0;

for (i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
}
console.log(total);


// push every second


var nameVar = ["Jan", "Chrissi", "Elke", "Peter", "Lisa", "Nina", "Mia", "Linea", "Ida", "Klaudia", "Reinhard", "Felix", "Niko"];

var names = [];

for (i = 0; i < nameVar.length; i+=2) {
    names.push(nameVar[i]);
}

console.log(names);

// lookup

var familyArray = [
    {
        firstName: "Christina",
        lastName: "Lerche",
        birthDate: "19.05.1990"
    },
    {
        firstName: "Jan Peter",
        lastName: "Radtke",
        birthDate: "24.10.1988"
    },
    {
        firstName: "Klaudia",
        lastName: "Lerche",
        birthDate: "31.09.1958"
    },
    {
        firstName: "Elke",
        lastName: "Radtke",
        birthDate: "01.10.1957"
    }
];

var lookupData = [];

function lookup(name, prop) {
    for (i = 0; i < familyArray.length; i++){
            if (familyArray[i].firstName == name) {
                return familyArray[i][prop] || "No such property!"
            }
    }
    return "No such Name!"
}

var data = lookup("Klaudia", "birthDate");

console.log(data);

// randon number function


function randomWholeNumber() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNumber());

//turnary operator

function turnary(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; 
}
console.log(turnary(-2))
