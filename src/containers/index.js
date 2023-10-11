import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './header';
import StoriesPage from './stories-page';
import { NAV_LINKS } from '../fixtures/nav-links';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {
          Object.keys(NAV_LINKS).map((key) => {
            return <Route key={key} path={`/${key}`} exact element={<StoriesPage title={NAV_LINKS[key]} />} />
          })
        }
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
