import './App.css';
import Button_ from './cmp/Button'
import Counter from './cmp/Counter'
import { useState } from 'react';

function App() {

    const [numOfClicks, setNumDeClicks] = useState(0);

    const clickHandler = () => {
        setNumDeClicks(numOfClicks+1);
    };

    const rebootCounter = () => {
        setNumDeClicks(0);
    };

    return (
        <div className='App'> 
            <div className='main-container'>
                <Counter numOfClicks={ numOfClicks } />
        
                <Button_ 
                    text='Click'
                    isButtonClick={ true }
                    clickHandler={ clickHandler }  
                />

                <Button_ 
                    text='Reboot'
                    isButtonClick={ false }
                    clickHandler={ rebootCounter } 
                /> 

            </div>
        </div>
    );
}

export default App;
