describe('Stack', () => {

    class Stack {
      
        getSize() {
            return 0
        }

    }

    it('should be empty when created', () => {
        const stack = new Stack()
        expect(stack.getSize()).toEqual(0)
    });


});
