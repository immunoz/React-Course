import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Testing 11-async-await', () => {

    test('getImagen should return an URL image', async() => {
      
        const url = await getImagen();
        expect( typeof url ).toBe( 'string' );

    });
    
})
