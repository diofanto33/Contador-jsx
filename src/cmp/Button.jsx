import React from 'react';

function Button_({ text, isButtonClick, clickHandler }) {
    return (
        <button className={ isButtonClick ? 'button-click' : 'boton-reboot' }
                onClick={ clickHandler }>
            { text }
        </button>
    )
}

export default Button_;
