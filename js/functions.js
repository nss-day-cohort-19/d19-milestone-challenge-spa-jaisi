console.log("yayyyy functions!!!");

var CarLot = (function (taco) {
  

 
      taco.handleHulkify = function (desc) {
     
      		desc.style.border = "thick solid #0000FF";
      		desc.style.background = "darkgray";
   
  		},
  	  taco.handleNormalise = function (desc){
  	  		desc.style.border = "thin solid black";
  	  		desc.style.background = "white";
  	  }

   return taco;
 

})(CarLot || {});

