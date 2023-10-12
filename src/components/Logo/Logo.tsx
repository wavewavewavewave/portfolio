import React from 'react';
import logo from '../../assets/logo.svg'

export const Logo = () => {
    return (
        <div>
            <a>
                <img src={logo} alt={'logo'}/>
            </a>
        </div>
    );
};