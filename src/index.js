import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/content/Movie.page";
import TvShowPage from "./pages/tvseries/TvShow.page";
import PopularPerson from "./pages/popular person/PopularPerson.page";
import PageNotFonud from "./pages/404/404";
import Home1Page from "./pages/home page/Home1.page";
import TrendingMovieInfo from "./pages/trending movie info/TrendingMovieInfo.page";
import './18n/18n' 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="/" element={<Home1Page/>}/>
      <Route path="/movie/:title" element={<MoviePage />} />
      <Route path="/tv/:title" element={<TvShowPage />} />
      <Route path="/person" element={<PopularPerson/>}/>
      <Route path="/movies/:id" element={<TrendingMovieInfo/>}/>
      </Route>
      <Route path="*" element={<PageNotFonud/>}/>
    </Routes>
  </BrowserRouter>
  </Suspense>

);
