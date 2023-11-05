import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies] = useState([
    {
      title: "Film 1",
      description: "Description du film 1",
      posterURL:
        "https://www.cinehorizons.net/sites/default/files/affiches/1101829632-babylon.jpg",
      rating: 3.8,
    },
    {
      title: "Film 2",
      description: "Description du film 2",
      posterURL:
        "https://toutelaculture.com/wp-content/uploads/2023/01/affiche-Babylone-680x924.webp",
      rating: 4.5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleTitleChange = (event) => {
    const titleFilter = event.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleFilter)
    );
    setFilteredMovies(filteredMovies);
  };

  const handleRatingChange = (event) => {
    const ratingFilter = parseFloat(event.target.value);
    const filteredMovies = movies.filter(
      (movie) => movie.rating >= ratingFilter
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="app">
      <Filter
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
