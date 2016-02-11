//
// production code
//

function Stack() {
    return {}
}


//
// test code
//

describe('stack', function () {

    var stack;

    beforeEach(function () {
        stack = new Stack();
    });

    it('dummy test', function () {
        expect(stack).toBeDefined();
    });

});
