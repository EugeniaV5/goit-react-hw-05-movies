import { lazy } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

const createChunk = componentName => {
  return lazy(() => import(`../pages/${componentName}`));
};

const HomePage = createChunk('HomePage');
const MoviesPage = createChunk('MoviesPage');
const MoviesDetailsPage = createChunk('MoviesDetailsPage');
const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');

export const App = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>{' '}
    </div>
  );
};
