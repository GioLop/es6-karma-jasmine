import {LinkedList} from '../src/LinkedList.js';

describe('Linked list', () => {
    it('Should create a Linked list instance', () => {
        const myLinkedList = new LinkedList();
        expect(myLinkedList instanceof LinkedList).toEqual(true);
    });

    describe('Add method', () => {
        it('Should add an element to the list', () => {
            const myLinkedList = new LinkedList();
            myLinkedList.add(1);

            expect(myLinkedList.size).toEqual(1);
        });
    });

    describe('Get method', () => {
        it('Should return an element from the list', () => {
            const myLinkedList = new LinkedList();
            myLinkedList.add(1);
            myLinkedList.add(2);
            myLinkedList.add(3);
            const data = myLinkedList.getByIndex(1);

            expect(data).toEqual(2);
        });
    });

    describe('Remove method', () => {
        it('Should remove an element from the list', () => {
            const myLinkedList = new LinkedList();
            myLinkedList.add(1);
            myLinkedList.add(2);
            myLinkedList.add(3);

            const removedElement = myLinkedList.removeByIndex(2);
            
            expect(removedElement).toEqual(3);
            expect(myLinkedList.size).toEqual(2);
        });
    });
});
