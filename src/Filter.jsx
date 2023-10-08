import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter par titre" onChange={onTitleChange} />
      <input type="number" placeholder="Filter par note" onChange={onRatingChange} />
    </div>
  );
};

export default Filter;
