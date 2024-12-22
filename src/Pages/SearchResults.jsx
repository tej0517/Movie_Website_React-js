import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=${page}`
      );
      setMovies(data.results);
    };
    fetchMovies();
  }, [query, page]);

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} currentPage={page} />
        ))}
      </div>
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
};

export default SearchResults;
