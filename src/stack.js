function Stack(capacity) {

    var elements = [];

    function size() {
        return elements.length;
    }

    return {
        pop: function () {
            if (size() == 0) {
                throw new Error('underflow');
            }
            var removedElements = elements.splice(size() - 1);
            return removedElements[0];
        },
        push: function (element) {
            if (size() == capacity) {
                throw new Error('overflow');
            }
            elements.push(element);
        },
        size: size
    };
}

describe('stack', function () {
    var stack;
    var BIG_CAPACITY = 10;

    beforeEach(function () {
        stack = new Stack(BIG_CAPACITY);
    });

    it('exists', function () {
        expect(stack).toBeDefined();
    });

    it('cannot pop from empty stack', function () {
        expect(stack.pop).toThrowError('underflow');
    });

    it('is empty', function () {
        expect(stack.size()).toBe(0);
    });

    it('size increases with pushed elements', function () {
        stack.push('sth');
        stack.push('sth');

        expect(stack.size()).toBe(2);
    });

    it('cannot push beyond capacity', function () {
        stack = new Stack(2);
        stack.push('sth');
        stack.push('sth');

        expect(function () {
            stack.push('sth');
        }).toThrowError('overflow');
    });

    it('pop returns pushed item', function () {
        stack.push('element');

        expect(stack.pop()).toBe('element');
    });

    it('pop decreases size', function () {
        stack.push('element');
        stack.pop();

        expect(stack.size()).toBe(0);
    });

    it('pops item other than the last one', function () {
        stack.push('first');
        stack.push('second');
        stack.pop();

        expect(stack.pop()).toBe('first');
    });
    it('does not remeber popped elements', function () {
        stack.push('first');
        stack.push('second');
        stack.pop();
        stack.push('third');

        expect(stack.pop()).toBe('third');

    });
});
