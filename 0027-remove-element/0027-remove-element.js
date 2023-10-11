/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let p1 = 0, p2 = nums.length - 1, count = 0;
  // (1) if nums[p1] === val, then check if nums[p2] === val
    // (1.1) if nums[p2] === val, then move the p2 1 step to the left until nums[p2] !== val
    // (1.2) if nums[p2] !== val, then swith nums[p1] and nums[p2], then move p1 to the right by 1 step, move p2 to the left by 1 step
  // (2) if nums[p1] !== val, move p1 to the right by 1 step;
  // at the same time, for cases (1.2) and (2), count non-val elements
  while (p1 <= p2) {
    if (nums[p1] === val) {
      if (nums[p2] === val) {
        p2--;
      } else {
        nums[p1] = nums[p2];
        nums[p2] = val;
        p1++;
        p2--;
        count++;
      }
    } else {
      count++;
      p1++;
    }
  }
  return count;
};