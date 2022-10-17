import { Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import MovieDetails from "pages/Movies/MovieDetails/MovieDetails";
import Cast from "pages/Movies/Cast/Cast";
import Reviews from "pages/Movies/Reviews/Reviews";
import SharedLayot from "components/SharedLayot/SharedLayot";

export default function UserRoutes() {
  return (
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
  )
}
