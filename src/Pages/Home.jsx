import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
      );
      setMovies(data.results);
    };
    fetchMovies();
  }, [page]);

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e", 
        color: "#fff",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <h1 style={{ marginBottom: "30px", fontWeight: "bold" }}>
          Popular Movies
        </h1>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              currentPage={page}
              style={{
                background: "rgba(0, 0, 0, 0.9)", 
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                padding: "10px",
                color: "#fff",
              }}
            />
          ))}
        </div>
        <Pagination currentPage={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
