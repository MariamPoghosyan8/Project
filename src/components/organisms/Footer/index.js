import React from "react";

import{
    logo,
    appstore,
    googleplay,
} from '../../../assets/Footer photos';

import {Image} from 'components'

import './style.scss';

import Paper from "components/atoms/Paper";
const Footer= ()=>{
    return(
        <footer>
            <Paper className="logo">
                <Image src={logo} className="logo-img"/>
            </Paper>
            <ul className="menu">
                <li className="menu-lsit">DONATIONS LISTS</li>
                <li>DONATIONS PAGE</li>
                <li>ABOUT US</li>
                <li>BLOG</li>
            </ul>
            <Paper className="downloadStore">
                <Image src={appstore} className="appstore-img"/>
                <Image src={googleplay} className="googleplay-img"/>
            </Paper>
            <p className="levelup">©2019 Level Up IT Center</p>
        </footer>
    );
};

export default Footer;