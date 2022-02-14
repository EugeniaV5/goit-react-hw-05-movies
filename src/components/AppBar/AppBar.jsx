import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Outlet />
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default AppBar;
