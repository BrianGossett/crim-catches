class Stack {}

describe('My Stack', () => {
    it('is created empty', () =>{
        const stack = new Stack();
        expect(stack.top).toBe(-1)
    });
})