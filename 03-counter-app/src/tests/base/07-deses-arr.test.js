import { retornaArreglo } from "../../base/07-deses-arr";
import '@testing-library/jest-dom';


describe('Pruebas 07-deses-arr ', () => {
  
    test('debe retorna un string y un numero', () => {
       
       //const arr =  retornaArreglo();
       const [letras, numeros] = retornaArreglo();
       expect(typeof letras).toBe('string');
       expect(typeof numeros).toBe('number');
        
       //expect(arr).toEqual(['ABC', 123]);

    })
    




})
