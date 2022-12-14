import React from 'react';


import { Link } from 'react-router-dom';


import { ReactComponent as Logo} from '../../SVG/head.svg'

import './header.styles.scss';

const Header = () => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                Home
            </Link>
            <Link className='option' to='/favorite'>
                Favorites
            </Link>
            <Link className='option' to='/bucket'>
                Bucket
            </Link>

        </div>
       
    </div>

)


export default Header;