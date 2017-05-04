console.log("woohoo i am here at events.js");



var CarLot = (function (taco) {
  


      taco.activateEvents = function () {
      console.log("within activateEvents function");
      var card = document.getElementsByClassName("card");
      var input = document.getElementById("input");
      console.log("card", card);
      for(i=0;i<card.length;i++){
      	card.item(i).addEventListener("click", function(event){
	      	//console.log("input", input.value);
	      	var desc = document.getElementsByClassName("card-text-muted");
	      	//console.log("desc",event.currentTarget.querySelector("h5"));
	      	//desc[i].innerHTML += input.value;
	      	event.target.closest("div").classList.toggle("hulkify");
	      	input.value = "";
          input.focus();
          input.addEventListener("keypress", function(event){
                      console.log("within keypress event");
                      console.log(document.getElementById(`desc--${i}`).innerHTML);
                      document.getElementById(`desc--${i}`).innerHTML += input.value;
            })
         
	      	//console.log("input_from_text", input_from_text);
      	});



  	  } 

    }
return taco;

})(CarLot || {});