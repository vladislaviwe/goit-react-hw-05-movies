import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const MovieDetails = lazy(() => import("pages/Movies/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/Movies/Cast/Cast"));
const Reviews = lazy(() => import("pages/Movies/Reviews/Reviews"));
const SharedLayot = lazy(() => import("components/SharedLayot/SharedLayot"));

export default function UserRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
          <Route path="/" element={<SharedLayot />}>
              <Route index element={<Home />}/>
              <Route path="/movies" element={<Movies />}/>
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                  <Route path="cast" element={<Cast />}/>
                  <Route path="reviews" element={<Reviews />}/>
              </Route>
              <Route path="*" element={<NotFoundPage />}/>
          </Route>
      </Routes>
    </Suspense>
  )
}
