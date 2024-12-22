import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setMovie(data);
    };

    const fetchCastDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setCast(data.cast.slice(0, 16));
    };

    fetchMovieDetails();
    fetchCastDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e", 
        color: "#fff",
        minHeight: "100vh",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      
      <div>
        
        <div className="container">
          <div
            className="row align-items-center"
            style={{
              background: "rgba(0, 0, 0, 0.9)", 
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "30px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            
            <div className="col-md-5 text-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </div>

            
            <div className="col-md-7">
              <h1>{movie.title}</h1>
              <p>
                <strong>Overview:</strong> {movie.overview}
              </p>
              <p>
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Rating:</strong> {movie.vote_average} / 10
              </p>
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong>Runtime:</strong> {movie.runtime} minutes
              </p>
            </div>
          </div>
        </div>

       
        <div className="container">
          <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>Cast</h2>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              padding: "10px",
            }}
          >
            {cast.map((actor) => (
              <div
                key={actor.id}
                style={{
                  textAlign: "center",
                  minWidth: "150px",
                  flexShrink: 0,
                  background: "rgba(0, 0, 0, 0.9)", 
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/150x225?text=No+Image"
                  }
                  alt={actor.name}
                  className="img-fluid rounded"
                />
                <p
                  className="mt-2"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  {actor.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <button
          className="btn btn-light mb-4"
          onClick={() => navigate(-1)}
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "25px",
            backgroundColor: "#ffb600", 
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <i className="bi bi-arrow-left-circle"></i> Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
