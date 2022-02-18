import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>{' '}
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default AppBar;
