import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  trendingFetchMoviesById,
  imageMovie,
} from "../../services/themoviedbApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import {
  Section,
  Button,
  LinkButton,
  List,
  LinkAdd,
  Title,
} from "./MovieDetailsPage.style";

export const MovieDetailsPage = () => {
  const [items, setItems] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const { movieId } = useParams();
  const location = useLocation();
  console.log("location:", location);

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
        toast.error("There is no review of the video and the cast");
      }
    }
    fetch();
  }, [movieId]);

  //console.log(items);

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
  } = items;

  return (
    <>
      <Section>
        <Button type="button">
          <LinkButton
            to={location?.state?.from ?? "/"}
            state={{ from: location }}
          >
            Go back
          </LinkButton>
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
      <Title>Additional information</Title>
      <List>
        <li>
          <LinkAdd to={`/movies/${movieId}/cast`}> Cast</LinkAdd>
        </li>
        <li>
          <LinkAdd to={`/movies/${movieId}/reviews`}> Reviews</LinkAdd>
        </li>
      </List>
      <Outlet />
    </>
  );
};
