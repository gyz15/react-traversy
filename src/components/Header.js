import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'
import {useState} from 'react';

export default function Header({title,onAdd}) {
    // console.log(Object.keys(props))
    const [buttonAdd,setButtonAdd]=useState(true)

    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname ==="/" && (<Button color={buttonAdd?'green':"red"} text={buttonAdd?'Add':"Close"} onClick={()=>{onAdd();setButtonAdd(!buttonAdd)}}/>)}
        </header>
    )
}
Header.defaultProps = {
    title:"Original Title",
};

Header.propTypes = {
    title:PropTypes.string.isRequired,
}

// style={headingStyle}
// const headingStyle = {
//     color:'red',
//     backgroundColor:"springgreen",
// }