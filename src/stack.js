//
// production code
//

function Stack(capacity) {

    var elements = [];

    return {
        size: size,
        push: push,
        pop: pop
    };

    function size() {
        return elements.length;
    }

    function push(element) {
        if (size() == capacity) {
            throw new Error('overflow');
        }
        elements.push(element);
    }

    function pop() {
        if (size() == 0) {
            throw new Error('underflow');
        }
        var lastElement = elements[elements.length - 1];
        elements = elements.splice(0, elements.length - 1);
        return lastElement;
    }
}


//
// test code
//

describe('stack', function () {

    var stack;

    beforeEach(function () {
        stack = new Stack();
    });

    it('creates empty', function () {
        expect(stack.size()).toBe(0);
    });

    it('increases size when element is added', function () {
        stack.push('anything');
        stack.push('anything');
        expect(stack.size()).toBe(2);
    });

    it('decreases size when element is removed', function () {
        stack.push('anything');
        stack.push('anything');
        stack.pop();
        expect(stack.size()).toBe(1);
    });

    it('returns removed element', function () {
        stack.push('a');
        stack.push('b');
        stack.pop();

        expect(stack.pop()).toBe('a');
    });

    it('throws underflow error on removing element from empty stack', function () {
        expect(stack.pop).toThrowError('underflow');
    });

    it('throws overflow error on adding element to full stack', function () {
        stack = new Stack(1);
        stack.push('anything');

        expect(stack.push).toThrowError('overflow');
    });

    it('operates normally after underflow error', function () {
        expect(stack.pop).toThrow();

        stack.push('a');
        expect(stack.size()).toBe(1);
        expect(stack.pop()).toBe('a');
    });

    it('operates normally after overflow error', function () {
        stack = new Stack(1);
        stack.push('a');

        expect(stack.push).toThrow();

        expect(stack.size()).toBe(1);
        expect(stack.pop()).toBe('a');
    });
});
