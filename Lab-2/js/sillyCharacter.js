/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName;
let age;
let isHero = false;
let specialPowers= ["fly","invisibility", "run", "strong" , "elastic", "velocity"];
let favoriteFood = ["Salad", "Fries", "Pancakes", "Pizza", "Cheesecake"];
let desc = "";
let genCharacter = [];
let hero;


// Function to generate a random character description

function GenerateDescription(){
    

    characterName = document.getElementById("characterName").value;

    //Dont generate description if name intput is empty
        if(characterName.length == undefined || characterName.length==0 ){
        document.getElementById("characterDescription").textContent = "Enter the character name...";
        return;
    }


    isHero = Math.floor(Math.random() * 2) ? "true" : "false";
    age = Math.floor(Math.random() * 99);
    genCharacter[0] = specialPowers[Math.floor(Math.random() * 5)];
    genCharacter[1] =  favoriteFood[Math.floor(Math.random() * 4)];
    hero = isHero ? "is a Hero" : "is not a Hero"
    desc = characterName + " is " + age + " years old, loves " + genCharacter[1] + ", has the power of " + genCharacter[0] + ", and " + hero;
    
    document.getElementById("characterDescription").textContent = desc;
}

// Functions to update character's age
function IncreaseAge(){
    if(desc.length ==0 || desc.length == undefined ){
        document.getElementById("characterDescription").textContent = "First Generate the description..";
        return;
    }
    if(age<=98 ){
      age++;
        UpdateDescription(age);
    }
}

function DecreaseAge(){
    
    if(desc.length ==0 || desc.length == undefined ){
        document.getElementById("characterDescription").textContent = "First Generate the description..";
        return;
    }

    if(age>0 ){
      age--;
    UpdateDescription(age);

    }


}

// Function to update the character's description after changing age
function UpdateDescription(age){
    desc = characterName + " is " + age + " years old, loves " + genCharacter[1] + ", has the power of " + genCharacter[0] + ", and " + hero;
    
    document.getElementById("characterDescription").textContent = desc;
}


// Add event listeners for buttons using querySelector
document.getElementById("generateButton").addEventListener("click", GenerateDescription);
document.getElementById("increaseAgeButton").addEventListener("click", IncreaseAge);
document.getElementById("decreaseAgeButton").addEventListener("click", DecreaseAge);