import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) =>{

    const [counter, setCounter] = useState(value);

    const handleAdd = (e)=>{
       //setCounter(counter+1);
       setCounter((c)=>c+1);
    }

    const handlSubtraction = (e)=>{
        //setCounter(counter+1);
        setCounter((c)=>c-1);
     }

     const handleReset= (e)=>{
        //setCounter(counter+1);
        setCounter(value);
     }

    return(
        <>  
         <h1>CounterApp</h1>
         <h2> { counter } </h2>
         <button onClick={ handleAdd }>+1</button>
         <button onClick={ handleReset}>reset</button>
         <button onClick={ handlSubtraction} >-1</button>
        </>
    )

}

    CounterApp.propTypes = {
        value: PropTypes.number.isRequired
    };

    CounterApp.defaultProps = {
            value : 10
    };

  export default CounterApp;