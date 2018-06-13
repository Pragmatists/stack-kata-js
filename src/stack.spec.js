describe('Stack', () => {

    class Stack {
      
        getSize() {
            return undefined
        }

    }

    it('should be empty when created', () => {
        const stack = new Stack()
        expect(stack.getSize()).toEqual(0)
    });


});
