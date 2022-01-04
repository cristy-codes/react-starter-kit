import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../main';

const Root = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default Root;
