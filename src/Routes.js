import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalFonts from './Styles/fonts/fonts';
import Info from './Pages/Info/Info';
import Profiles from './Pages/Profiles/Profiles';
import Skills from './Pages/Skills/Skills';
import Archivings from './Pages/Archivings/Archivings';
import Projects from './Pages/Projects/Projects';
import Careers from './Pages/Careers/Careers';
import Nav from './Components/Nav/Nav';

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalFonts />
        <Router>
          <Nav />
          <Info />
          <Profiles />
          <Skills />
          <Archivings />
          <Projects />
          <Careers />
        </Router>
      </>
    );
  }
}

export default Routes;
