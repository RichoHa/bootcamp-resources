// create the Queue class with two methods to remove and add an element
class Queue {
    constructor(array = []) {
        this.container = array; ``
    }
    addToQueue = function (item) {
        this.container.push(item);
    }
    removeFromQueue = function () {
        this.container.shift();
        return undefined;
    }
}

module.exports = Queue;
