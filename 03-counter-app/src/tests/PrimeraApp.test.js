import React from 'react';
import {shallow} from 'enzyme';
//import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';


describe('Pruebas <PrimeraApp/>', () => {


//     test('Debe mostrar el mensaje Hola ', () => {
//           const saludo = 'Hola';

//          // const wrapper = render(<PrimeraApp/> )
         
//          const {getByText} = render(<PrimeraApp saludo='Hola'}/>)

      
//          expect(getByText(saludo)).toBeInTheDocument();

//    })
    
        test('debe mostrar <PrimeraApp/> correctamente ', () => {
           
            const saludo = 'Hola';
            const wrapper = shallow(<PrimeraApp saludo={saludo} />);
            
            expect(wrapper).toMatchSnapshot();

        });
        

        test('debe mostrar el subtitulo enviado por props ', () => {
              
           const saludo ='Hola';
           const otra = 'texto de prueba';
           const wrapper = shallow(
           <PrimeraApp 
            saludo={saludo} 
            otra ={otra}
           />);


           const textoParrafo = wrapper.find('p').text() ;
           //console.log(textoParrafo);
           
           expect(textoParrafo).toBe(otra);

        })
        


})
