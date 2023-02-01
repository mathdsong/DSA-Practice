/**
 * @param {number[]} prices
 * @return {number}
 */


// 5th attempt:
var maxProfit = function(prices) {
    let left = 0, max_profit = 0;

    for (let right = 1; right < prices.length; right++) {
        if (prices[right] <= prices[left]) {
            left = right;
        }
        if (max_profit < prices[right] - prices[left]) {
            max_profit = prices[right] - prices[left];
        }
        
    }

    return max_profit;
}








// // 4th attempt:
// var maxProfit = function(prices) {
//     let left = 0, right = prices.length - 1, max_profit = 0;
//     while (left < right) {
//         max_profit = Math.max(prices[right] - prices[left], max_profit);
//         if (prices[left] >= prices[left+1] && prices[right] >= prices[right - 1]) {
//             left++;
//         } else if (prices[left] >= prices[left+1] && prices[right] <= prices[right - 1]) {
//             left++;
//             right--;
//         } else if (prices[left] <= prices[left+1] && prices[right] <= prices[right - 1]) {
//             right--;
//         } else if (prices[left] <= prices[left+1] && prices[right] >= prices[right - 1]) {
//             left += 2;
//         }
//     }
//     return max_profit;
// }




// // 3rd attempt 79/211:
// var maxProfit = function(prices) {
//    let left = 0, right = prices.length - 1, max_profit = 0;
//    if (prices.length > 2) {
//         while (left < right) {
//             if (prices[left + 1] < prices[left]) {
//                 left++;
//             }
//             if (prices[right - 1] > prices[right]) {
//                 right--;
//             }
//             max_profit = Math.max(max_profit, prices[right] - prices[left]);
//             left = left + 2;
//             right = right - 2;
//         }
//    } else if (prices.length === 2) {
//        max_profit = Math.max(0, prices[1] - prices[0]);
//    } else if (prices.length === 1) {
//        return 0;
//    }
   
//    return max_profit;
// }


// // 2nd attempt: 97/211
// var maxProfit = function(prices) {
//     let left = 0, right = prices.length - 1, max_profit = 0;

//     while (left < right) {
//         if (prices[left] > prices[right]) {
//             left++;
//         }
//         max_profit = Math.max(prices[right] - prices[left], max_profit);
//         right--;
//     }

//     return max_profit;
// };







// 1st attempt: 202/211
// var maxProfit = function(prices) {
//     let maxProfit = 0;
    
//     for (var buy = 0; buy < prices.length; buy++) {
//         for (var sell = buy + 1; sell < prices.length; sell++) {
//             if (prices[sell] - prices[buy] > 0) {
//                 maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
//             }
//         }
//     }

//     return maxProfit;
// };