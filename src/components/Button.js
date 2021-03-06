import React from 'react';
import PropTypes from 'prop-types';


export default function Button({color,text,onClick}) {
    return (
        <div>
            <button onClick ={onClick}style={{backgroundColor:color}}className='btn'>{text}</button>
        </div>
    )
}
Button.defaultProps = {
    color:"black",
    text:"Button",
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick:PropTypes.func,
}