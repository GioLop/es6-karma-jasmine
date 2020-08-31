import modifiers from '../src/modifiers.js';

describe("Modifiers", () => {
    beforeEach(() => {
        var dummyElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    })

    it("should toogle class in element", () => {
        const element = document.getElementById()

        modifiers.toogleClass(element, "open")
        expect(element.classList.contains("open")).toEqual(true)

        modifiers.toogleClass(element, "open")
        expect(element.classList.contains("open")).toEqual(false)
    })
})