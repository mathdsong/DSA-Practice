/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let hashmap = new Map(), min = Infinity;
    for (var i = 0; i < cards.length; i++) {
        hashmap.get(cards[i]) ? hashmap.get(cards[i]).push(i) : hashmap.set(cards[i], [i]);
    }

    for (const value of hashmap.values()) {
        for (var j = 0; j < value.length - 1; j++) {
            if (value[j+1] - value[j] < min) {
                min = value[j+1] - value[j] + 1;
            }
        }
    }
    
    return min === Infinity ? -1 : min;
};