console.log("woohoo i am here at events.js");



var CarLot = (function (taco) {
  

      var desc;
      taco.activateEvents = function () {
     // console.log("within activateEvents function");
      var card = document.getElementsByClassName("card");
      var input = document.getElementById("input");
      //console.log("card", card);
      for(i=0;i<card.length;i++){
      	card.item(i).addEventListener("click", function(event){
	      	//console.log("input", input.value);
          desc = event.target.closest("div");
	      	//event.target.closest("div").classList.toggle("hulkify");
          CarLot.handleHulkify(desc);
	      	input.value = "";
          input.focus();
          input.addEventListener("keypress", function(event){
                      console.log("within keypress event");
                      desc.querySelector("p").innerHTML = input.value;
                      if(event.keycode === 13){
                         desc.querySelector("p").innerHTML = input.value;
                         
                      }
                      CarLot.handleNormalise(desc);
            })
  
      	});



  	  } 

    }
return taco;

})(CarLot || {});