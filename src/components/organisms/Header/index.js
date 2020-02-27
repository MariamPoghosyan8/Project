import React from 'react';

import {
    logo,
    search,
    edit,
    bell,
    global,
    audit,
    shield,
} from '../../../assets/Header photos';

import {
    Paper,
    Image,
    Button, 
    TextField, 
} from "components";

import "./style.scss";

const Header = () => {
    return(
        <header className="isActive">
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
            <Paper className="right-header">
                <Paper className="header-one">
                    <Button bgColor='blue' className="sign-in">Sign in</Button>
                    <Button bgColor='white' className="sign-up"> Sign up</Button>
                </Paper>
                <Paper className="header-two">
                        <Paper flexName="flexible" className="inputandicon">
                            <TextField className="text-field"></TextField>
                            <Image src={search} className="searchIconOne"/>
                        </Paper>
                        <Paper className="header-two-img"></Paper>
                </Paper>
                <Paper className="header-tree">
                    <Paper className="search"></Paper>
                    <Paper className="header-two-img"></Paper>
                </Paper>
                <Paper className="header-four">
                    <Paper className="search"></Paper>
                    <Paper className="header-two-img"></Paper>
                    <Paper className="header-hover">
                        <Paper className="data">
                            <Paper className="header-two-img img-hover"></Paper>
                            <Paper className="data-text">
                                <p className="name">NAME SURNAME</p>
                                <p className="country">COUNTRY</p>
                            </Paper>
                        </Paper>
                        <Paper className="border-bottom"></Paper>
                        <p className="hover-text">Edit profile</p>
                        <p className="hover-text">Reminder</p>
                        <p className="hover-text">Language</p>
                        <Paper className="border-bottom"></Paper>
                        <p className="hover-text">Tearms and Conditions</p>
                        <p className="hover-text">Privacy Policy</p>
                        <Paper className="border-bottom"></Paper>
                        <p className="hover-text sign-out">SIGN OUT</p>
                    </Paper>
                </Paper>
            </Paper>
            <Paper class="bgm-content">
                <Paper class="burger-menu">
                    <Paper class="line"></Paper>
                    <Paper class="line"></Paper>
                    <Paper class="line"></Paper>
                </Paper>
                <Image src={logo} className="logo-img"/>
                <p className="sign-in-gray">SIGN IN</p>
                <Paper className="list-menu">
                    <ul className="mobile-menu">
                        <li className="menu-lsit">DONATIONS LISTS</li>
                        <li>DONATIONS PAGE</li>
                        <li>ABOUT US</li>
                        <li>BLOG</li> 
                    </ul>
                </Paper>
            </Paper>
            <Paper class="content">
                <Paper className="burgerandlogo">
                    <Paper class="burger-menu-second">
                        <Paper class="line-second"></Paper>
                        <Paper class="line-second"></Paper>
                        <Paper class="line-second"></Paper>
                    </Paper>
                    <Paper>
                        <Image src={logo} className="logo-img"/>
                    </Paper>
                    <Paper></Paper>
                </Paper>
                <Paper flexName="flexible jBetween"                      className="list-menu-second">
                    <ul className="mobile-menu-second">
                        <li>DONATIONS LISTS</li>
                        <li>DONATIONS PAGE</li>
                        <li>ABOUT US</li>
                        <li>BLOG</li> 
                    </ul>
                    <Paper className="info-content">
                        <Paper flexName="flexible">
                            <TextField className="text-field-second"></TextField>
                            <Image src={search} className="searchIcon"/>
                        </Paper>
                        <Paper className="data-mobile">
                            <Paper className="mobile-img"></Paper>
                            <p className="surname">NAME SURNAME</p>
                        </Paper>
                        <Paper className="edit">
                            <Image src={edit} className="icon"/>
                            <p className="edit-text">Edit Profile</p>
                        </Paper>
                        <Paper className="reminder">
                            <Image src={bell} className="icon"/>
                            <p className="bell-text">Reminder</p>
                        </Paper>
                        <Paper className="global">
                            <Image src={global} className="icon"/>
                            <p className="global-text">Language</p>
                        </Paper>
                        <Paper className="audit">
                            <Image src={audit} className="icon"/>
                            <p className="audit-text">Tearms and Conditions</p>
                        </Paper>
                        <Paper className="shield">
                            <Image src={shield} className="icon"/>
                            <p className="shield-text">Privacy Policy</p>
                        </Paper>
                        <Paper className="mobileSignOut">SIGN OUT</Paper>
                    </Paper>
                </Paper> 
            </Paper>
        </header>
    )
};

export default Header;