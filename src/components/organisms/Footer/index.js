import React from "react";

import{
    logo,
    appstore,
    googleplay,
} from '../../../assets/Footer photos';

import {Image} from 'components'
import {
    NavLink
  } from 'react-router-dom';
import './style.scss';

import Paper from "components/atoms/Paper";
const Footer= ()=>{
    return(
        <footer>
            <Paper className="logo">
                <Image src={logo} className="logo-img"/>
            </Paper>
            <ul className="menu">
                <li className="menu-lsit">
                    <NavLink
                            to="/DonashionList"
                        >
                            DONATIONS LISTS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            to="/DonashionPage"
                         >
                            DONATIONS PAGE
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            to="/AboutUs"
                         >
                           ABOUT US
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            to="/blog"
                        >
                           BLOG
                    </NavLink>
                </li>
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