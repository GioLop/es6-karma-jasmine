import _$ from '../src/_$';

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return _$.lastElement(this.items);
    }

    isEmpty() {
        return _$.isEmpty(this.items);
    }

    size() {
        return this.items.length;
    }
}

export default Stack;