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
            if (this.size === 0) {
                throw Error('Stack underflow exception')
            }
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

    it('should throw exception when empty stack is popped', () => {
        expect(() => stack.pop()).toThrow('Stack underflow exception');
    });

    it('should throw exception when full stack is pushed', () => {
        stack = new Stack(1)
        stack.push("elem")
        expect(() => stack.push("elem")).toThrow('Stack overflow exception');
    });


});
