import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './Styles/GlobalStyle';
import Main from './Pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Main />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
