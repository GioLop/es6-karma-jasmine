import Queue from '../src/queue'

describe("Queue", () => {
    it("Create a queue data structure", () => {
        const myQueue = new Queue();
        expect(myQueue instanceof Queue).toEqual(true);
    });

    describe("Enqueue method", () => {
        it("Should add one element to the Queue", () => {
            const myQueue = new Queue();
            myQueue.enqueue('item1');
            expect(myQueue.items[0]).toEqual('item1');
        })
        it("Should add multiple elements to the Queue", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            expect(myQueue.items.length).toEqual(3);
        })
    })

    describe("Dequeue method", () => {
        it("Should remove the first element", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            myQueue.dequeue();
            expect(myQueue.items[0]).toEqual(2);
        })
        it("Should return the item dequeued", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            let dequeueItem = myQueue.dequeue();
            expect(dequeueItem).toEqual(1);
        })
    })

    describe("Front element", () => {
        it("Should return the first element", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            let firstElement = myQueue.front();
            expect(firstElement).toEqual(1);
        })
    })

    describe("isEmpty Queue", () => {
        it("Should return true if the Queue has no elements", () => {
            const myQueue = new Queue();
            expect(myQueue.isEmpty()).toEqual(true);
        })
        it("Should return false if the Queue has elements", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            expect(myQueue.isEmpty()).toEqual(false);
        })
    })

    describe("Size Queue", () => {
        it("Should return the number of elements", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            expect(myQueue.size()).toEqual(3);
        })
    })
    
    describe("Print Queue", () => {
        it("Should return an string with the Queue's elements", () => {
            const myQueue = new Queue();
            myQueue.enqueue(1,2,3);
            expect(myQueue.print()).toEqual('1,2,3');
        })
    })
});