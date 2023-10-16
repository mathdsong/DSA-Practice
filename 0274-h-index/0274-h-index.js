/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>a-b);
    let h_index = 0, length = citations.length;
    for (let i = 0; i < length; i++) {
        if (length - i >= citations[i]) {
            h_index = citations[i];
        } else {
            if (length - i >= h_index) {
                h_index = length - i;
            }
            break;
        }
    }
    return h_index;
};