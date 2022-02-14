import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

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
