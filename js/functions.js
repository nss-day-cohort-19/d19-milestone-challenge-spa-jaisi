console.log("yayyyy functions!!!");

var CarLot = (function (taco) {
  

 
      taco.handleHulkify = function (event) {
     
      	event.target.classList.toggle("hulkify");
      	console.log("the card was clicked", event.target);
   
  }

   return taco;
 

})(CarLot || {});

