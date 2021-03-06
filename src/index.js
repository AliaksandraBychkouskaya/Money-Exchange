// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let value = {};

    if (currency <= 0) {
      return {};
    }

    if (currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    if (Math.floor(currency / 50) > 0) {
      value.H = Math.floor(currency / 50);
      currency -= Math.floor(currency / 50) * 50;
    }
    if (Math.floor(currency / 25) > 0) {
      value.Q = Math.floor(currency / 25);
      currency -= Math.floor(currency / 25) * 25;
    }
    if (Math.floor(currency / 10) > 0) {
      value.D = Math.floor(currency / 10);
      currency -= Math.floor(currency / 10) * 10;
    }
    if (Math.floor(currency / 5) > 0) {
      value.N = Math.floor(currency / 5);
      currency -= Math.floor(currency / 5) * 5;
    }
      if (Math.floor(currency / 1) > 0) {
        value.P = currency;
      }
    return value;
}
