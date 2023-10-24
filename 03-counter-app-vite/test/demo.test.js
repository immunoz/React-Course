describe('Demo component testing', () => {
    test('should not fail', () => {
        const message1 = 'Hello World';
        const message2 = message1.trim();
        expect( message1 ).toBe( message2 );
    })
})


/**
 * Notas:
 * 1. Test initialization
 * 2. Test inputs
 * 3. Observe the behaviour against the inputs
 */