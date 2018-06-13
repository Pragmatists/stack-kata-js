describe('Stack', () => {

    class Stack {
      
        getSize() {
            return 0
        }

        push(){
            
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
