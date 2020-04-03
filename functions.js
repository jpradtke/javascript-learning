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

/*if (condition) {
    //If condition is true, what happens?
}
*/

function checkName(first, last) {
    if (first == "Jan") {
        console.log("Gut gemacht Jan");
    }
    else {
        console.log("Zonk!");
    }
};

//GOLF SCORE

/*
Strokes     Return
1           Hole in One
<= par - 2  Eagle
par - 1     Birdie
par         Par
par + 1     Bogey
par + 2     Double Bogey
>= par + 3  Go Home!
*/

var names = ["Hole In One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par -2 ) {
        return names[1]
    }
    else if (strokes == par -1 ) {
        return names[2]
    }
    else if (strokes == par ) {
        return names[3]
    }
    else if (strokes == par + 1 ) {
        return names[4]
    }
    else if (strokes == par + 2 ) {
        return names[5]
    }
    else if (strokes >= par + 3 ) {
        return names[6]
    }
    else {
        return "Something went wrong";
    }
}

console.log(golfScore(6,8));

//Switch function

function switchFunction(test) {
    var answer = "";

    switch(test) {
        case 1:
           answer = "alpha";
           break;
           case 2:
               answer =  "beta";
               break;
               case 3:
                   answer = "gamma";
                   break;

    }
    return answer;
}

console.log(switchFunction(2));