import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp'


const divRoot = document.querySelector('#root');

console.log(divRoot);
//ReactDOM.render( <PrimeraApp/>, divRoot );
ReactDOM.render( /*<PrimeraApp />*/ <CounterApp />, divRoot);

