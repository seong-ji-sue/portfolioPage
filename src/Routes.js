import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalFonts from './Styles/fonts/fonts';
import Info from './Pages/Info/Info';
import AboutMe from './Pages/AboutMe/AboutMe';
import Skills from './Pages/Skills/Skills';
import Archiving from './Pages/Archiving/Archiving';

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalFonts />
        <Router>
          <Info></Info>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Archiving></Archiving>
        </Router>
      </>
    );
  }
}

export default Routes;
