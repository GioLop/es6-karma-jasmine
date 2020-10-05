// FIFO(First in First Out)
// addition of elements at the end of the queue 
// removal of elements from the front of the queue. 
// Like Stack, Queue is also a linear data structure.
import _$ from '../src/_$';

class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(...element){
        element.forEach( item => this.items.push(item))
    }

    dequeue(){
        return this.items.shift(); 
    }

    front(){
        return this.items[0];
    }

    isEmpty(){
        return _$.isEmpty(this.items);
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString())
        return this.items.toString()
    }

}
export default Queue