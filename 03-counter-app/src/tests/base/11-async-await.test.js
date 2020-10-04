import {getImagen} from '../../base/11-async-await'


describe('Pruebas con asycs-await y fetch', () => {
    

    test('debe retornar una url de una imagen ', async () => {
        
        const url = await getImagen();

        expect( url.includes('https://')).toBe( true);


    })
    

})
