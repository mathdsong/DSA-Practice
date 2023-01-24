/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let arr = s.split(''), res = '', i = 0, j = s.length - 1;

  while (i < j) {  
      while (i < j && s.charCodeAt(j) < 65 && s.charCodeAt(j) >= 33 || i < j && s.charCodeAt(j) >= 91 && s.charCodeAt(j) <= 96) {          
          j--;
      }
      
      while (i < j && s.charCodeAt(i) < 65 && s.charCodeAt(i) >= 33 || i < j && s.charCodeAt(i) >= 91 && s.charCodeAt(i) <= 96) {          
          i++;
      }
      
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
  }
  return arr.join('');
};