import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Nav from './Components/Nav/Nav';

function Routes() {
  const multiRef = {
    infoRef: useRef(),
    profilesRef: useRef(),
    skillsRef: useRef(),
    archivingsRef: useRef(),
    projectsRef: useRef(),
    careersRef: useRef(),
  };

  return (
    <BrowserRouter basename='/'>
      <Nav multiRef={multiRef} />
      <MainPage multiRef={multiRef} />
    </BrowserRouter>
  );
}

export default Routes;
