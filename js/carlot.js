var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (getInventory) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText);
      console.log("inventory is loaded");
      getInventory(inventory);
      });

      inventoryLoader.addEventListener("error", function () {
      console.log("oh no!!!!");
      });

      inventoryLoader.open("GET",  "inventory.json");
      inventoryLoader.send();

    }
  };

})(CarLot || {});