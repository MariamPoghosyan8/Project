import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import classnames from 'classnames';
import Header from './components/organisms/Header'

import 'sass/animate.scss';
import 'sass/main.scss';
import 'sass/media.scss';

const mapStateToProps = ({ darkMode }) => ({ darkMode });

const App = ({
  darkMode,
  toggleDarkMode
}) => {

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode(true);
    };
  },[toggleDarkMode]);

  return (
    <>
        <main className={classnames("Main", { 'darkMode': darkMode })}>
            {/* <p>Hello</p> */}
          <Header/>
        </main>
    </>
  )
};

export default connect(mapStateToProps)(withRouter(App));
