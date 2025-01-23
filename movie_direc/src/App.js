import React from "react";
import MovieSearch from "./searchApi.js";
import PopularMovies from "./home.js";
import Navbar from "./navBar.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;