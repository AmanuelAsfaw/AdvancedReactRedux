import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from "./components/App";
import Root from './Root';

ReactDOM.render(
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App/>}/>
        </Routes>      
      </BrowserRouter>
    </Root>,
  document.getElementById('root')
);
