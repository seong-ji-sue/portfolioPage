import React from 'react';
import Router from './Routes';
import GlobalStyle from './Styles/GlobalStyle';
import GlobalFonts from './Styles/fonts/fonts';
import { ModalProvider } from 'styled-react-modal';

export default function App() {
  return (
    <React.StrictMode>
      <ModalProvider>
        <GlobalStyle />
        <GlobalFonts />
        <Router />
      </ModalProvider>
    </React.StrictMode>
  );
}
