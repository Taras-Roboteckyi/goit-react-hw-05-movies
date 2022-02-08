import { useState, useEffect } from "react";

import { trendingFetchMovies } from "../../services/themoviedbApi";
import TrendingListItem from "../../components/TrendingListItem/TrendingListItem";

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      trendingFetchMovies().then(({ results }) => {
        //console.log(results);
        setItems(results);
      });
    } catch (error) {
      console.error();
      setError(error);
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {!error && (
        <ul>
          {items.map(({ id, original_title, name }) => (
            <TrendingListItem key={id} data={{ id, original_title, name }} />
          ))}
        </ul>
      )}
    </main>
  );
};
