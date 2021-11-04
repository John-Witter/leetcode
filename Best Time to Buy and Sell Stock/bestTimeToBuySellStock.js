/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        
        if (price < min) min = price;
        else if (price - min > max) {
            max = price - min;
        }
    }
    
    return max
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // EXPECTED: 5

prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)); // EXPECTED: 0