let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;
const display = document.querySelector('#display');

// CONDITION RULES
// 1. CRITICAL FAILURE (Highest Priority)
// If:
// health < 30 AND enemyNearby is true
// Display:
// "CRITICAL ALERT: Immediate Evacuation Required"
if(health < 30 && enemyNearby === true){
    //CRITICAL ALERT: Immediate Evacuation Required
    display.textContent="CRITICAL ALERT: Immediate Evacuation Required";
}


// 2. LOW RESOURCES WARNING
// If:
// ammo < 5 OR shield is false
// Display:
// "Warning: Low Resources"

else if(ammo < 5 || shield === false){
    display.textContent="Warning: Low Resources";
}

