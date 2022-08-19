// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");



window.addEventListener("load", function(){
    let button = document.getElementById("formSubmit");
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]"); 
    let cargoMass = document.querySelector("input[name=cargoMass]");        
    let list = document.getElementById("faultyItems");
    
    
    list.style.visibility = "hidden";
    
    button.addEventListener("click", function(event){
    //    console.log(pilotInput.value);
    
    event.preventDefault();
        formSubmission(document, list, pilotInput.value, copilotName.value, fuelLevelInput.value, cargoMass.value);
        
        
            
        
    
    });    
});        
    
window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();


   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
   console.log(planet.name);
   console.log(planet.image);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
   
});
    
    
    








