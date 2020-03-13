import React, { useState, useCallback, useEffect } from 'react';
import {
    NavLink,
    withRouter,
} from 'react-router-dom';
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
    Modal,
} from "components";

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


import "./style.scss";

// import { FacebookProvider, LoginButton, Subscribe, Status, Profile } from 'react-facebook';
// import ReactModalLogin from "react-modal-login";
// import facebookConfig from './social-config'

const Header = () => {

    const [logined, setLogined] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const login = data => {
        console.log(data);
        if (data.id) { 
            const { name, email, picture: {data: {url: imgUrl}} } = data;

            setLogined(true);
            setProfileData({
                name,
                email,
                imgUrl
            });
        }
    };

    return (
        <header className="isActive">

        

            <Paper flexName='flexible' className="left-header">
                <NavLink to='/'>
                    <Image src={logo} className="logo-img" />
                </NavLink>
                <Paper className="border-left"></Paper>
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
            </Paper>


            <Paper className="right-header">
                {!logined && (
                    <Paper className="header-one">
                        <Button  className="sign-in" onClick={() => setShowModal(true)}> Sign in</Button>
                        <a href="https://www.facebook.com/r.php?locale=ru_RU" target="_blank">
                            <Button bgColor='white' className="sign-up"> Sign up</Button>
                        </a>
                    </Paper>
                )}
                

                {/* <Paper className="header-two">
                        <Paper flexName="flexible" className="inputandicon">
                            <TextField className="text-field"></TextField>
                            <Image src={search} className="searchIconOne"/>
                        </Paper>
                        <Paper className="header-two-img"></Paper>
                </Paper> */}


                {/* <Paper className="header-tree">
                    <Paper className="search"></Paper>
                    <Paper className="header-two-img"></Paper>
                </Paper> */}

                {logined && profileData &&  (
                    
                    <Paper className="header-four">
                        <Paper className="search"></Paper>
                        <Paper 
                            className="header-two-img"
                            style={{backgroundImage: `url(${profileData.imgUrl})`}}
                        />
                        <Paper className="header-hover-wrapper">
                            <Paper className="header-hover">
                                <Paper className="data">
                                    <Paper 
                                        className="header-two-img img-hover"
                                        style={{backgroundImage: `url(${profileData.imgUrl})`}}
                                    />
                                    <Paper className="data-text">
                                        <p className="name">{profileData.name}</p>
                                        <p className="country">{profileData.email}</p>
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
                                <p 
                                    className="hover-text sign-out" 
                                    onClick={()=>{setLogined(false);}}
                                >
                                    SIGN OUT
                                </p>
                            </Paper>
                        </Paper>
                    </Paper>
                )}
                


            </Paper>



            <Paper className="bgm-content">
                <Paper className="burger-menu">
                    <Paper className="line"></Paper>
                    <Paper className="line"></Paper>
                    <Paper className="line"></Paper>
                </Paper>
                <Image src={logo} className="logo-img" />
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
            <Paper className="content">
                <Paper className="burgerandlogo">
                    <Paper className="burger-menu-second">
                        <Paper className="line-second"></Paper>
                        <Paper className="line-second"></Paper>
                        <Paper className="line-second"></Paper>
                    </Paper>
                    <Paper>
                        <Image src={logo} className="logo-img" />
                    </Paper>
                    <Paper></Paper>
                </Paper>
                <Paper flexName="flexible jBetween" className="list-menu-second">
                    <ul className="mobile-menu-second">
                        <li>DONATIONS LISTS</li>
                        <li>DONATIONS PAGE</li>
                        <li>ABOUT US</li>
                        <li>BLOG</li>
                    </ul>
                    <Paper className="info-content">
                        <Paper flexName="flexible">
                            <TextField className="text-field-second"></TextField>
                            <Image src={search} className="searchIcon" />
                        </Paper>
                        <Paper className="data-mobile">
                            <Paper className="mobile-img"></Paper>
                            <p className="surname">NAME SURNAME</p>
                        </Paper>
                        <Paper className="edit">
                            <Image src={edit} className="icon" />
                            <p className="edit-text">Edit Profile</p>
                        </Paper>
                        <Paper className="reminder">
                            <Image src={bell} className="icon" />
                            <p className="bell-text">Reminder</p>
                        </Paper>
                        <Paper className="global">
                            <Image src={global} className="icon" />
                            <p className="global-text">Language</p>
                        </Paper>
                        <Paper className="audit">
                            <Image src={audit} className="icon" />
                            <p className="audit-text">Tearms and Conditions</p>
                        </Paper>
                        <Paper className="shield">
                            <Image src={shield} className="icon" />
                            <p className="shield-text">Privacy Policy</p>
                        </Paper>
                        <Paper className="mobileSignOut">SIGN OUT</Paper>
                    </Paper>
                </Paper>
            </Paper>



            {showModal && (
                <Modal closeModal={() => setShowModal(false)} >
                        <FacebookLogin
                            appId="2697267607055233"
                            fields="name,email,picture"
                            callback={login}
 
                        />

                        <GoogleLogin
                            clientId="790669993304-pk7udsjk42106dask7orh9rdipqq30cb.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={console.log}
                            cookiePolicy={'single_host_origin'}
                            className='google-but'
                        />
                </Modal>
            )}

        </header>
    )
};

export default Header;