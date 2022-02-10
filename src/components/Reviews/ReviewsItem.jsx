import PropTypes from "prop-types";

const ReviewsItem = ({ dataReviews }) => {
  const { author, content } = dataReviews;

  return (
    <li>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  dataReviews: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
