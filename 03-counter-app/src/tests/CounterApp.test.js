import CounterApp  from '../CounterApp'
import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach( () =>{
            wrapper = shallow(<CounterApp />)
        }   
    );

    test('el snapshop debe ser correcto', () => {
        expect(wrapper).toMatchSnapshot();
    })
    

    test('debe mostar el valor por defecto 10 ', () => {

       const wrapper = shallow(<CounterApp value={10} />);
       const textoParrafo = wrapper.find('h2').text().trim();
       expect(textoParrafo).toBe('10');
    })
    

    test('debe incremetar con el boton de +1', () => {
        
       wrapper.find('button').at(0).simulate('click');
     
       const counterText = wrapper.find('h2').text().trim();
     
        expect( counterText ).toBe('11');


    })


    test('debe decremetar con el boton de -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
      
        const counterText = wrapper.find('h2').text().trim();
      
         expect( counterText ).toBe('9');
 
 
     })

    
     test('debe conlocar el valor por defecto con el boton reset', () => {
        
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valor  = wrapper.find('h2').text().trim();
        expect(valor).toBe('105');
 
 
     })


})
