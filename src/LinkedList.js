import { info } from 'autoprefixer';
import 'regenerator-runtime/runtime.js';

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new LinkedListNode(data);

        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head;
            
            while(current.next !== null) {
                current = current.next;
            }
            
            current.next = newNode;
        }
        this.size += 1;
    }

    getByIndex(index) {
        if (index > -1) {
            let current = this.head;
            let i = 0;

            while((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }

            return current !== null ? current.data : undefined
        } else {
            return undefined
        }
    }

    removeByIndex(index) {
        if ((this.head === null) || (index < 0)) {
            console.error('Index out of bounds');
        }

        if (index === 0) {
            const data = this.head.data;

            this.head = this.head.next;
            this.size -= 1;

            return data;
        }

        let current = this.head;
        let previous = null;
        let i = 0;

        while((current !== null) && (i < index)) {
            previous = current;
            current = current.next;
            i++;
        }

        if (current !== null) {
            previous.next = current.next;
            this.size -= 1;

            return current.data;
        }

        console.error('Index out of bounds');
    }
}