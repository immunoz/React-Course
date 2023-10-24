import usContext from "../../src/base-pruebas/06-deses-obj"

describe('Testing 06-deses-arr', () => {

    test('Function should return a user object', () => {
      
        const clave = "El Macho";
        const edad = 43;
        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const user = usContext( { clave, edad } );
        
        expect( user ).toEqual( testUser );
    })
    
  
})
