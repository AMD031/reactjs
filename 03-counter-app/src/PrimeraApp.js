import React from 'react';
import PropTypes from 'prop-types';



const PrimeraApp = ({saludo, otra}) =>{
    return (
        <>
            <h1>{saludo}</h1>
             <p>{otra}</p>
        </>
        )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
  };

  PrimeraApp.defaultProps = {
    otra: 'valor por defecto'
  };

export default PrimeraApp;