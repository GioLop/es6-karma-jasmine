import _$ from '../src/_$';

class Stack {
    constructor() {
        this.items = []
    }

    push(...elements) {
        elements.forEach((element) => {
            this.items.push(element);
        });
    }

    pop() {
        if (this.size == 0) {
            return "Underflow";
        } else {
            return this.items.pop();
        }
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

    clear () {
        this.items = [];
    }

    toString() {
        return this.items.toString()
    }
}

export default Stack;