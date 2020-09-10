import React from 'react';
import {Link} from 'react-router-dom';

export default ()=>{
    return (
        <div>
        <Link to='/'>React SSR</Link>
        <Link to='/launches'>Launches</Link>
        </div>
    )
}