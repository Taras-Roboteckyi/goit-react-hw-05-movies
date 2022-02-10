import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { trendingFetchMoviesById } from "../../services/themoviedbApi";
import CastListItem from "./CastListItem";

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  //console.log(actors);

  useEffect(() => {
    async function fetch() {
      try {
        const item = await trendingFetchMoviesById(movieId);
        // console.log("По Id:", item);
        setActors(item.credits.cast);
      } catch (error) {
        toast.error("Oops!");
      }
    }
    fetch();
  }, [movieId]);

  return (
    <section>
      {actors.length === 0 && <p>No information about the actors </p>}
      {actors && (
        <ul>
          {actors.map(({ id, character, original_name, profile_path }) => (
            <CastListItem
              key={id}
              dataActor={{ character, original_name, profile_path }}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
