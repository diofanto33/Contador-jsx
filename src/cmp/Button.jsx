import React from 'react';
import '../css/Button.css'

function Button_({ text, isButtonClick, clickHandler }) {
    return (
        <button className={ isButtonClick ? 'button-click' : 'button-reboot' }
                onClick={ clickHandler }>
            { text }
        </button>
    )
}

export default Button_;
