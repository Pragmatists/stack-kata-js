describe('Stack', () => {

    class Stack {

        constructor() {
            this.size = 0
        }

        getSize() {
            return this.size
        }

        push() {
            this.size++
        }

        pop() {
           this.size--
        }

    }

    let stack

    beforeEach(() => {
        stack = new Stack()
    });

    it('should be empty when created', () => {
        expect(stack.getSize()).toEqual(0)
    });

    it('size after push is one', () => {
        stack.push("elem")
        expect(stack.getSize()).toEqual(1)
    });

    it('is empty after push and pop', () => {
        stack.push("elem")
        stack.pop()
        expect(stack.getSize()).toEqual(0)
    });


});
