// Write your helper functions here!
try {
    require('isomorphic-fetch');
    } catch (e) {
        //do nothing
    }
    

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionDiv= document.getElementById("missionTarget");
   missionDiv.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src= ${imageUrl}>`;
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

}


function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "")
    {
        return "Empty";
    }
    else if (isNaN(numberInput))
    {
        return "Not a Number";
    }
    else if (isNaN(numberInput) === false)
    {
        return "Is a Number";
    }
 }
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const inputVals = [pilot, copilot, fuelLevel, cargoLevel];
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    let launchStat = document.getElementById("launchStatus");
    let fuelStat = document.getElementById("fuelStatus");
    let cargoStat = document.getElementById("cargoStatus");
    let isReady = true;    
        
    for(let i = 0; i < inputVals.length; i++) {
        if(validateInput(inputVals[i]) === 'Empty'){
            alert("All fields are required!");
            return;

        }
    }
   if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        
    alert("Make sure to enter valid data for each field");
    return;
    
    } 
        
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.
        `;

        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch
        `;

        if(fuelLevel >= 10000) {
            fuelStat.innerHTML = `Fuel level high enough for launch`;
            isReady =true;
        }
        if(cargoLevel <= 10000){
            cargoStat.innerHTML = `Cargo mass low enough for launch`;
            isReady = true;
        }
        if (fuelLevel < 10000){
            
            fuelStat.innerHTML = `Fuel level too low for launch`;
            // launchStat.innerHTML = `Shuttle not ready for launch`;
            isReady = false;
             
            // list.style.visibility = "visible";
        }  
        

        if(cargoLevel > 10000){
            cargoStat.innerHTML = `Cargo mass is too much for launch`;
            isReady = false;
        }
        


        if(!isReady){
            launchStat.innerHTML = `Shuttle is not ready for launch`;
            launchStat.style.color = "red";

        } else {
             launchStat.innerHTML = `Shuttle is ready for launch`;
            launchStat.style.color = "green";
            
        }

        list.style.visibility = "visible";
        
        
        

        
    
    
    

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     return response.json();
});

    return planetsReturned;
}


   

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*6)];
}

try {
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
    } catch (e){
        //do nothing
    }
    
