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

// 3. MID MISSION STATUS
// If:
// missionProgress is between 1 and 70
// Display:
// "Mission In Progress"

else if(missionProgress<70 && missionProgress>1 ){
    display.textContent="Mission In Progress";
}

// 5. MISSION COMPLETE
// If:
// missionProgress === 100
// Display:
// "Mission Complete Successfully"

else if(missionProgress ===100){
    display.textContent="Mission Complete Successfully";
}

// 4. HIGH PROGRESS STATUS
// If:
// missionProgress > 70 AND enemyNearby is false
// Display:
// "Approaching Mission Completion"

else if(missionProgress > 70 && enemyNearby=== false){
    display.textContent="Approaching Mission Completion";
}

// 6. DEFAULT STATE
// If none of the above conditions match:
// "System Stable"

else{
   display.textContent= "System Stable";
}