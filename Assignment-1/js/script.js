
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

function changeAgent(){
    if(indexes[0] === 4){
        indexes[0]= -1;
    }
    
    indexes[0] ++;
    agentOutput.textContent = agentType[indexes[0]];
    
} 

//Buttons event listener
document.getElementById("agentBtn").addEventListener("click", changeAgent);

