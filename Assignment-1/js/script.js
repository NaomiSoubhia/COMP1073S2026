
//Variables

let agentType = [ "Ghost", "Shadow", "Viper", "Nova", "Phantom"];

let locations = [ "Arctic Research Base", "Abandoned Space Station", "Underground Bunker", "Cyber City","Volcanic Island"];

let weapon = ["Plasma Rifle","Laser Pistol","EMP Grenades","Nano Blade","Quantum Cannon"];

let mission = ["Rescue the Scientist","Retrieve Secret Data","Disable Enemy Network","Protect the VIP","Destroy the Prototype"];

let riskLevel = ["Low","Moderate","High","Extreme","Critical"];

//Index
let indexes = [-1,-1,-1,-1,-1];

// QuerySelector
agentOutput = document.getElementById("agentOutput");
locationOutput = document.getElementById("locationOutput");


//Function to change the agent, go throw the array
function changeAgent(){
    if(indexes[0] === 4){
        indexes[0]= -1;
    }
    indexes[0] ++;
    agentOutput.textContent = agentType[indexes[0]];
    
} 

//Function to go throw the locations array
function changeLocation(){
     if(indexes[1] === 4){
        indexes[1]= -1;
    }
    indexes[1] ++;
    locationOutput.textContent = locations[indexes[1]];
}





//Buttons event listener
document.getElementById("agentBtn").addEventListener("click", changeAgent);
document.getElementById("locationBtn").addEventListener("click", changeLocation);
