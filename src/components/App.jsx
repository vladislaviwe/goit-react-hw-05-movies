import { Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import Navbar from "./Navbar/Navbar";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import MovieDetails from "pages/Movies/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};
