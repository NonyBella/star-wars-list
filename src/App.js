import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import './style.css';

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/').then((rawData) => rawData.json())
      .then((response) => {
        setState(response.results);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>

      <div>
        {state.map((item) => (
          <MovieCard
            title={item.title}
            date={item.release_date}
            description={item.opening_crawl}
          />
        ))}
      </div>
    </div>
  );
}
