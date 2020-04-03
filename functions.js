//example
function functionName() {
    console.log("Hello World!"); //command
};

functionName(); //call the function

//END

var family = [
    {
        firstName: "Vorname",
        lastName: "Nachname",
        birthdate: "Geburtstag"
    }
];

function addFamilyMember(myFirstName, myLastName, myBirthDate) {
    family.push(
        {
            firstName: myFirstName,
            lastName: myLastName,
            birthdate: myBirthDate
        }
    );
    console.log(family);
}

//setTimeout(addFamilyMember("Jan Peter", "Radtke", "24.10.1988"), 10000);
//setTimeout(addFamilyMember("Christina", "Lerche", "190.05.1990"), 10000);
//setTimeout(addFamilyMember("Elke", "Radtke", "01.10.1957"), 10000);

function message() {
    alert("Hello");
};

// IF Example

if (condition) {
    //If condition is true, what happens?
}

function checkName(first, last) {
    if (first == "Jan") {
        console.log("Gut gemacht Jan");
    }
    else {
        console.log("Zonk!");
    }
};
