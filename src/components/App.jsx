import { Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import Navbar from "./Navbar/Navbar";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};
