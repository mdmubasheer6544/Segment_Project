import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Menu from '../Components/NaveBar/navBar';

const LandingPage = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </>
  );
};

export default LandingPage;
