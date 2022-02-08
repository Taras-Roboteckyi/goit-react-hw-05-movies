import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
