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

    }

    it('should be empty when created', () => {
        const stack = new Stack()
        expect(stack.getSize()).toEqual(0)
    });

    it('size after push is one', () => {
        const stack = new Stack();
        stack.push("elem")
        expect(stack.getSize()).toEqual(1)
    });


});
