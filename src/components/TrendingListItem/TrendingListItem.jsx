import PropTypes from "prop-types";

import { ListItemStyle, LinkStyle } from "./TrendingListItem.styled";

const TrendingListItem = ({ data, location }) => {
  const { id, original_title, name } = data;

  /* console.log(data); */
  return (
    <ListItemStyle>
      <LinkStyle to={`/movies/${id}`} state={{ from: location }}>
        {original_title || name}
      </LinkStyle>
    </ListItemStyle>
  );
};

export default TrendingListItem;

TrendingListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string,
    name: PropTypes.string,
  }),
};
