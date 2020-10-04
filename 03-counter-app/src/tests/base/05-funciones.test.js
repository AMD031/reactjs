import { getUser,  getUsuarioActivo} from '../../base/05-funciones'
import '@testing-library/jest-dom';
describe('Pruebas 05-funciones', () => {
    
    test('getUser debe retornar un objeto.', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })
    
    test('get user activo debe retornar un objeto ', () => {
        
        const usuarioActivo = {
            uid: 'ABC567',
            username: 'gato'
        }


        expect(getUsuarioActivo('gato')).toEqual(usuarioActivo);



    })
    


})
