import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes'
describe('Pruebas funciones heroes', () => {
    
    test('debe de retornar un heroe por id', () => {

        const id  = 1;
        const heroe = getHeroeById(id);
        const heroedata = heroes.find( h => h.id ===id );

        expect(heroe).toEqual(heroedata);
    
    })

    test('debe de retornar undefine si heroe no existe', () => {

        const id  = 10;
        const heroe = getHeroeById(id);
        const heroedata = heroes.find( h => h.id ===id );

        expect(heroe).toBe(undefined);
    
    })


    test('debe retorna un arreglo con heroes de dc', () => {
        const owner = 'DC';
        const heroesDc = getHeroesByOwner('DC')
        const heroesDcdata = heroes.filter( h => h.owner === owner );

        expect(heroesDc).toEqual(heroesDcdata);
    
    })

    
    test('debe retorna un arreglo con heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner)
       // const heroesMarveldata = heroes.filter( h => h.owner === owner );

        expect(heroesMarvel.length).toBe(2);
    
    })


    
})
