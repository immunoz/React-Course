import React, { useState } from 'react'
import PropTypes from 'prop-types'

function CounterApp({ value }) {

    const [ counter, setCounter ] = useState( value );

    const increaseCounter = () => {
        setCounter( (c) => c + 1 );
    }
    
    const subtractCounter = () => {
        setCounter( (c) => c - 1 );
    }
    
    const resetCounter = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2 data-testid='counter'>{ counter }</h2>

            <button onClick={ increaseCounter }> +1 </button>
            <button onClick={ subtractCounter }> -1 </button>
            <button onClick={ resetCounter }> reset </button>

        </>
    )
}

export default CounterApp

CounterApp.defaultProps = {
    value: 0,
}

PropTypes.propTypes = {
    value: PropTypes.number,
}