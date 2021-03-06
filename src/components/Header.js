import PropTypes from 'prop-types';
import Button from './Button';

export default function Header({title}) {
    // console.log(Object.keys(props))
    const onClick = () =>{
        console.log("test")
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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