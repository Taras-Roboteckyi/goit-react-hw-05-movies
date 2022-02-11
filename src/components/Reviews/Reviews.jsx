import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClockLoader from "react-spinners/ClockLoader";

import { trendingFetchMoviesById } from "../../services/themoviedbApi";
import ReviewsItem from "./ReviewsItem";
import { Info } from "./Reviews.styled";
import { Spinner } from "../../App.styled";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  //console.log(reviews);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const item = await trendingFetchMoviesById(movieId);
        //console.log("По Id:", item);
        setReviews(item.reviews.results);
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
      {loading && <ClockLoader css={Spinner} size={50} />}
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
