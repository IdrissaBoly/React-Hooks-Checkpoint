import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies] = useState([
    { title: 'Film 1', description: 'Description du film 1', posterURL: 'https://2.bp.blogspot.com/_iyzDU6gO2tY/STcukKPANaI/AAAAAAAAAEY/--NQxQFihME/s400/El+%C3%BAltimo+gran+mago.jpg', rating: 4.5 },
    { title: 'Film 2', description: 'Description du film 2', posterURL: 'https://2.bp.blogspot.com/_iyzDU6gO2tY/STcukKPANaI/AAAAAAAAAEY/--NQxQFihME/s400/El+%C3%BAltimo+gran+mago.jpg', rating: 3.8 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleTitleChange = (event) => {
    const titleFilter = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(titleFilter));
    setFilteredMovies(filteredMovies);
  };

  const handleRatingChange = (event) => {
    const ratingFilter = parseFloat(event.target.value);
    const filteredMovies = movies.filter(movie => movie.rating >= ratingFilter);
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="app">
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
