//example
function functionName(){
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

addFamilyMember("Jan Peter", "Radtke", "24.10.1988");
addFamilyMember("Christina", "Lerche", "190.05.1990");
addFamilyMember("Elke", "Radtke", "01.10.1957");