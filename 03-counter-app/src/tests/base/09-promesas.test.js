import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from '../../base/09-promesas';




describe('09-promesas', () => {
    
    test('getHeroeByIdAsync  debe retornar un heroe async ', (done) => {
        
        const id = 1;
        getHeroeByIdAsync(id).then(heroe =>{
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });
    
    test('debe obtener un error si el heroe por id no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(10).catch( error =>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })


    });
    


})
