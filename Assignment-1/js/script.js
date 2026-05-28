
//Variables

let agentType = ["Ghost", "Shadow", "Viper", "Nova", "Phantom"];

let locations = ["Arctic Research Base", "Abandoned Space Station", "Underground Bunker", "Cyber City", "Volcanic Island"];

let weapon = ["Plasma Rifle", "Laser Pistol", "EMP Grenades", "Nano Blade", "Quantum Cannon"];

let mission = ["Rescue the Scientist", "Retrieve Secret Data", "Disable Enemy Network", "Protect the VIP", "Destroy the Prototype"];

let riskLevel = ["Low", "Moderate", "High", "Extreme", "Critical"];

//Index
let indexes = [-1, -1, -1, -1, -1];

// QuerySelector
agentOutput = document.getElementById("agentOutput");
locationOutput = document.getElementById("locationOutput");
weaponOutput = document.getElementById("weaponOutput");
missionOutput = document.getElementById("missionOutput");
riskLevelOutput = document.getElementById("riskOutput");
briefingText = document.getElementById("briefingText");



//Function to change the agent, go throw the array and update the text
function changeAgent() {
    if (indexes[0] === 4) {
        indexes[0] = -1;
    }
    indexes[0]++;
    agentOutput.textContent = agentType[indexes[0]];

}

//Function to go throw the locations array and update the text
function changeLocation() {
    if (indexes[1] === 4) {
        indexes[1] = -1;
    }
    indexes[1]++;
    locationOutput.textContent = locations[indexes[1]];
}


//Function that goes throw the weapon array and update the text
function changeWeapon() {
    if (indexes[2] === 4) {
        indexes[2] = -1;
    }
    indexes[2]++;
    weaponOutput.textContent = weapon[indexes[2]];
}

//Function that goes throw the mission array and update the text
function changeMission() {
    if (indexes[3] === 4) {
        indexes[3] = -1;
    }
    indexes[3]++;
    missionOutput.textContent = mission[indexes[3]];
}

//Function that goes throw the risk level array and update the text
function changeRiskLevel() {
    if (indexes[4] === 4) {
        indexes[4] = -1;
    }
    indexes[4]++;
    riskLevelOutput.textContent = riskLevel[indexes[4]];
}

function reset() {
    indexes = [-1, -1, -1, -1, -1];
    riskLevelOutput.textContent = "Not Selected";
    missionOutput.textContent = "Not Selected";
    weaponOutput.textContent = "Not Selected";
    locationOutput.textContent = "Not Selected";
    agentOutput.textContent = "Not Selected";
}

function launch() {
    if (indexes.includes(-1)) {
        briefingText.textContent = "MISSION ABORTED: Missing parameters...";
    }
    else {
        briefingText.textContent = `MISSION READY:
        Agent Type: ${agentType[indexes[0]]}
        Location: ${locations[indexes[1]]}
        Weapon: ${weapon[indexes[2]]}
        Mission: ${mission[indexes[3]]}
        Risk Level: ${riskLevel[indexes[4]]}`;
    }

}

function random(){

    //Random numbers
    indexes[0] =  Math.floor(Math.random() * 5);
    indexes[1] =  Math.floor(Math.random() * 5);
    indexes[2] =  Math.floor(Math.random() * 5);
    indexes[3] =  Math.floor(Math.random() * 5);
    indexes[4] =  Math.floor(Math.random() * 5);

    // Update in html
    agentOutput.textContent = agentType[indexes[0]];
    locationOutput.textContent = locations[indexes[1]];
    weaponOutput.textContent = weapon[indexes[2]];
    missionOutput.textContent = mission[indexes[3]];
    riskLevelOutput.textContent = riskLevel[indexes[4]];
}

//Buttons event listener
document.getElementById("agentBtn").addEventListener("click", changeAgent);
document.getElementById("locationBtn").addEventListener("click", changeLocation);
document.getElementById("weaponBtn").addEventListener("click", changeWeapon);
document.getElementById("missionBtn").addEventListener("click", changeMission);
document.getElementById("riskBtn").addEventListener("click", changeRiskLevel);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("launchBtn").addEventListener("click", launch);
document.getElementById("randomBtn").addEventListener("click", random);




