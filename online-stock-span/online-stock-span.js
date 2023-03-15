
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let result = 1;
    while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
        result += this.stack[this.stack.length - 1][1];
        this.stack.pop();
    }
    this.stack.push([price, result]);

    return result;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */