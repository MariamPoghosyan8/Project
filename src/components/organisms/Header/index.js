import React from 'react';
import Paper from 'components/atoms/Paper';
import Image from 'components/atoms/Image'
import logo from '../../../assets/Header photos/logo.svg'

import "./style.scss"
import Button from 'components/atoms/Button';
import TextField from 'components/molecules/TextField';
const Header = () => {
    return(
        <header>
            <Paper flexName='flexible' className="left-header">
                <Image src={logo} className="logo-img"/>
                <Paper className="border-left"></Paper>
                <ul className="menu">
                    <li className="menu-lsit">DONATIONS LISTS</li>
                    <li>DONATIONS PAGE</li>
                    <li>ABOUT US</li>
                    <li>BLOG</li>
                </ul>
            </Paper>
            <Paper>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </Paper>
           
        </header>
    )
};
export default Header;