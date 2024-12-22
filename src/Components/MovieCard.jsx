import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path } = movie;

  return (
    <div className="col-md-3 mb-3">
      <div className="card shadow h-100">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <Link to={`/movie/${id}`} className="btn btn-primary mt-auto">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
