import Stack from '../src/Stack.js';

describe('Stack', () => {
    it('Should create and Stack instance', () => {
        const myStack = new Stack();
        expect(myStack instanceof Stack).toEqual(true);
    });

    describe('push method', () => {
        it('should add an element', () => {
            const myStack = new Stack();
            myStack.push(1)

            expect(myStack.items[0]).toEqual(1)
        });
    });

    describe('pop method', () => {
        it('should return the last element', () => {
            const myStack = new Stack();
            myStack.push(1)

            const element = myStack.pop()

            expect(element).toEqual(1)
        });
        
        it('should remove the last element from the collection', () => {
            const myStack = new Stack();
            myStack.push(1)

            const element = myStack.pop()

            expect(myStack.items.length).toEqual(0)
        });
    });

    describe('peek pethod', () => {
        it('should retunr the last element', () => {
            const myStack = new Stack();
            myStack.push(1);
            myStack.push(2);
            myStack.push(3);
            
            expect(myStack.peek()).toEqual(3);
        });
    });

    describe('isEmpty', () => {
        it('should return false when the collection has any item', () => {
            const myStack = new Stack();
            myStack.push(1);

            expect(myStack.isEmpty()).toEqual(false);
        });

        it('should return true when the collection has no items', () => {
            const myStack = new Stack();
            expect(myStack.isEmpty()).toEqual(true);
        });
    });

    describe('size method', () => {
        it('should return the collection size', () => {
            const myStack = new Stack();
            myStack.push(1);
            myStack.push(2);
            myStack.push(3);
            
            expect(myStack.size()).toEqual(3);
        });
    });
});
