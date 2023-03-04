/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.count = 0;
    this.size = size;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.count < this.size) {
        this.sum += val;
        this.queue.push(val);
        this.count++;
    } else if (this.count === this.size) {
        this.sum += val - this.queue[0];
        this.queue.shift();
        this.queue.push(val);
    }
    return this.sum / this.count;


};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */