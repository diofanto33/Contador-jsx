import React from 'react';

function Counter({ numOfClicks }) {
    return(
        <div className='counter'>
            { numOfClicks }
        </div>
    );
}

export default Counter;
