import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  trendingFetchMoviesById,
  imageMovie,
} from "../../services/themoviedbApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Section, Button, LinkButton } from "./MovieDetailsPage.style";

export const MovieDetailsPage = () => {
  const [items, setItems] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  //const [genre, setGenre] = useState("");
  //const [error, setError] = useState(null);
  const { movieId } = useParams();
  /* console.log(movieId); */

  useEffect(() => {
    async function fetch() {
      try {
        const item = await trendingFetchMoviesById(movieId);
        //console.log("По Id:", item);
        setItems(item);
        const imagesUrl = await imageMovie();
        //console.log("imageUrl: ", imagesUrl);
        const baseUrl = imagesUrl.images.base_url;
        const size = imagesUrl.images.poster_sizes;
        const lastElement = size[size.length - 1];
        const imageUrlOriginal = baseUrl + lastElement;
        //console.log(imageUrlOriginal);
        setImageUrl(imageUrlOriginal);
      } catch (error) {
        //setError(error);
        toast.error("There is no review of the video and the cast");
      }
    }
    fetch();
  }, [movieId]);

  console.log(items);

  const {
    backdrop_path,
    poster_path,
    name,
    original_title,
    release_date,
    first_air_date,
    vote_average,
    overview,
    genres,
    /* credits,
    reviews, */
  } = items;

  return (
    <Section>
      <Button type="button">
        <LinkButton to="/">Go back</LinkButton>
      </Button>
      <MovieCard
        dataVideo={{
          backdrop_path,
          poster_path,
          name,
          original_title,
          release_date,
          first_air_date,
          vote_average,
          overview,
          genres,
        }}
        imageUrl={imageUrl}
      />
    </Section>
  );
};
