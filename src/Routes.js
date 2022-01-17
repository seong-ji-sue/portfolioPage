import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Nav from './Components/Nav/Nav';

function Routes() {
  const multiRef = {
    InfoRef: useRef(),
    ProfilesRef: useRef(),
    SkillsRef: useRef(),
    ArchivingsRef: useRef(),
    ProjectsRef: useRef(),
    CareersRef: useRef(),
  };

  return (
    <BrowserRouter>
      <Nav multiRef={multiRef} />
      <MainPage multiRef={multiRef} />
    </BrowserRouter>
  );
}

export default Routes;
