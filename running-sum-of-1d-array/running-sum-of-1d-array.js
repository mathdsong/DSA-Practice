/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   var result = [nums[0]];
   for (var i = 1; i < nums.length; i++) {
       result.push(result[i-1] + nums[i]);
   }
   return result; 
};