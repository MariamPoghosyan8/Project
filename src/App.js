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
import {Button} from "./components";
import {
  Main,
  Blog,
  AboutUs,
  DonashionList,
  DonashionPage,
} from './containers'

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
        <Header/>
        <main className={classnames("Main")}>
          <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/DonashionList" component={DonashionList} />
              <Route exact path="/DonashionPage" component={DonashionPage} />
          </Switch>

        </main>
    </>
  )
};

export default connect(mapStateToProps)(withRouter(App));
