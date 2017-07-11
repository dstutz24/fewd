var howMuch = parseInt( prompt("How much is the price of that product your buying?") );
var howMany = parseInt( prompt("How many of that product is in inventory?") );
var moneyYou = parseInt( prompt("How much money do you have?") );
var planBuy = parseInt( prompt("How many items do you wish to buy?") );

if(moneyYou >= 5) {
  console.log("Good you have enough money to buy 1 item");
} else if (moneyYou < 5) {
  console.log("Get a job bro!");	
}




