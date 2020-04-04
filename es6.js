console.log("Hello World!");

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

function getNames() {
for (i = 0; i < familyArray.length; i++) {
    const root = document.createElement('tr');
    const familyFirstName = document.createElement('td');
    const familyLastName = document.createElement('td');
    const familyBirthDate = document.createElement('td');


    const arrayFirstName = familyArray[i].firstName;
    
    
    const arrayLastName = familyArray[i].lastName;
    const arrayBirthDate = familyArray[i].birthDate;


    console.log(familyFirstName);
    familyFirstName.textContent = arrayFirstName ;
    familyLastName.textContent = arrayLastName ;
    familyBirthDate.textContent = arrayBirthDate ;

    root.append(familyFirstName, familyLastName, familyBirthDate);
   document.getElementById("names").appendChild(root);
    }
};

getNames();
