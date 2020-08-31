import modifiers from '../src/modifiers.js';

describe("Modifiers", () => {
    beforeEach(() => {
        const dummyElement = document.createElement('div')
        document.getElement = jasmine.createSpy('HTML Element').and.returnValue(dummyElement)
    })

    it("should add open class in element", () => {
        const element = document.getElement()

        modifiers.toogleClass(element, "open")
        expect(element.classList.contains("open")).toEqual(true)
    })

    it("should remove open class in element", () => {
        const element = document.getElement()
        element.classList.add("open")

        modifiers.toogleClass(element, "open")
        expect(element.classList.contains("open")).toEqual(false)
    })
})