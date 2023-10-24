import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Testing at 02-template-string', () => {

    test('getSaludo should return "Hola Isaac"', () => {

      const name = 'Isaac';
      const message = getSaludo( name );
      expect( message ).toBe( `Hola ${ name }` );

    })
    
})
