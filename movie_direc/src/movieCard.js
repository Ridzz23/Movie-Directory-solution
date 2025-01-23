import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {movie.poster_path ? (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          No Image
        </div>
      )}
      <h3 style={{ color:"black", fontSize: "1rem", marginTop: "10px" }}>{movie.title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        {movie.release_date || "Unknown Release Date"}
      </p>
    </div>
  );
};

export default MovieCard;
