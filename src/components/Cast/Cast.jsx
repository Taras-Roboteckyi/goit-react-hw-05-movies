import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "../../App.styled";

import { trendingFetchMoviesById } from "../../services/themoviedbApi";
import CastListItem from "./CastListItem";
import { List, TextInfo } from "./CastListItem.styled";

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  //console.log(actors);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const item = await trendingFetchMoviesById(movieId);
        // console.log("По Id:", item);
        setActors(item.credits.cast);
      } catch (error) {
        toast.error("Oops!");
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [movieId]);

  return (
    <section>
      {actors.length === 0 && (
        <TextInfo>No information about the actors </TextInfo>
      )}
      {loading && <ClockLoader css={Spinner} size={50} />}
      {actors && (
        <List>
          {actors.map(({ id, character, original_name, profile_path }) => (
            <CastListItem
              key={id}
              dataActor={{ character, original_name, profile_path }}
            />
          ))}
        </List>
      )}
    </section>
  );
};
