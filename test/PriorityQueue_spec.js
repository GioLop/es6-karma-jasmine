import PriorityQueue from '../src/PriorityQueue'

describe("Priority Queue", () => {
    it("Create a priority queue data structure", () => {
        const myQueue = new PriorityQueue();
        expect(myQueue instanceof PriorityQueue).toEqual(true);
    });

    describe("Enqueue method", () => {
        it("Should add elements based and removed based on a priority", () => {
            const myQueue = new PriorityQueue();
            
            myQueue.enqueue('Jhon', 2);
            myQueue.enqueue('Jack', 1);
            myQueue.enqueue('Camila', 1);

            expect(myQueue.items[0].element).toEqual('Jack');
            expect(myQueue.items[1].element).toEqual('Camila');
            expect(myQueue.items[2].element).toEqual('Jhon');
        })
    })
});