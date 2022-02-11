import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { trendingFetchMoviesById } from "../../services/themoviedbApi";
import ReviewsItem from "./ReviewsItem";
import { Info } from "./Reviews.styled";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  //console.log(reviews);

  useEffect(() => {
    async function fetch() {
      try {
        const item = await trendingFetchMoviesById(movieId);
        //console.log("По Id:", item);
        setReviews(item.reviews.results);
      } catch (error) {
        toast.error("Oops!");
      }
    }
    fetch();
  }, [movieId]);

  return (
    <section>
      {reviews.length === 0 && (
        <Info>We don't have any rewiews for this movie</Info>
      )}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id} dataReviews={{ author, content }} />
          ))}
        </ul>
      )}
    </section>
  );
};
