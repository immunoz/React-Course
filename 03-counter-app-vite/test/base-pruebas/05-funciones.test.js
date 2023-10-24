import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Testing at 05-functions', () => {
  
    test('getUserShould return an object', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();

        expect( user ).toEqual( testUser );
    });

    test('getUsuarioActivo should return an object', () => {

        const name = 'Isaac'
        const testUser = {
            uid: 'ABC567',
            username: name,
        }
        const user = getUsuarioActivo(name);
        
        expect( user ).toEqual( testUser );

    })
    
})
