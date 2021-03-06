//console.log("i am here");

function getInventory (inventory) {
  // Loop over the inventory and populate the page
  var output = document.getElementById("output");
  for (i=0; i<inventory.cars.length;i++){
  	console.log(inventory.cars[i]);

  	output.innerHTML += `<div class='col-sm-4 wrapper'><div class='card text-center'><div class='card-block'>`
  						+ `<h4 class='card-title'>` + inventory.cars[i].make + `</h4>`
  						+`<h5 class='card-text'>Model:` 
  						+ inventory.cars[i].model 
  						+`</h5><h5 class='card-text'>Year:`
  						+ inventory.cars[i].year 
  						+`</h5><h5 class='card-text'>Price:$`
  						+ inventory.cars[i].price 
  						+`</h5><p class='card-text-muted'>`
  						+ inventory.cars[i].description 
  						+`</p></div></div></div>` ;
  
  		
  }
  
  // Now that the DOM is loaded, establish all the event listeners needed
 CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(getInventory);



