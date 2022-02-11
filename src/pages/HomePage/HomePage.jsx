import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trendingFetchMovies } from "../../services/themoviedbApi";
import TrendingListItem from "../../components/TrendingListItem/TrendingListItem";
import { Title } from "./HomePage.styled";

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const locationHome = useLocation();

  useEffect(() => {
    try {
      trendingFetchMovies().then(({ results }) => {
        //console.log(results);
        setItems(results);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {!error && (
        <ul>
          {items.map(({ id, original_title, name }) => (
            <TrendingListItem
              key={id}
              data={{ id, original_title, name }}
              location={locationHome}
            />
          ))}
        </ul>
      )}
    </main>
  );
};
