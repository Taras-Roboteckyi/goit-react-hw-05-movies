import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ClockLoader from "react-spinners/ClockLoader";

import { Layout } from "./components/Layout/Layout";
import { Cast } from "./components/Cast/Cast";
import { Reviews } from "./components/Reviews/Reviews";
import { Spinner } from "./App.styled";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage").then((module) => ({
    default: module.HomePage,
  }))
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage").then((module) => ({
    default: module.MovieDetailsPage,
  }))
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage").then((module) => ({
    default: module.MoviesPage,
  }))
);

export default function App() {
  return (
    <Suspense fallback={<ClockLoader css={Spinner} size={50} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
