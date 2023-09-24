import React from 'react';
import '../css/Counter.css';

function Counter({ numOfClicks }) {
    return(
        <div className='counter'>
            { numOfClicks }
        </div>
    );
}

export default Counter;
