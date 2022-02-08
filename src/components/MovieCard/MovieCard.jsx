//import PropTypes from 'prop-types';

//import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";

//import ContactListItem from '../ContactListItem/ContactListItem';

import { Section, Image } from "./MovieCard.styled";

const MovieCard = ({ dataVideo, imageUrl }) => {
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
  } = dataVideo;

  let filmYear;
  release_date !== undefined
    ? (filmYear = release_date)
    : (filmYear = first_air_date);
  if (!release_date && !first_air_date) {
    filmYear = "";
  }
  console.log(genres);

  if (genres) {
    const arrayGenres = genres.map((genre) => genre.name);
    const nameGenres = arrayGenres[arrayGenres];
    console.log(arrayGenres);
  }

  //console.log(imageUrl);
  return (
    <Section>
      <Image
        src={imageUrl + backdrop_path || imageUrl + poster_path}
        alt=""
        width="350"
      />
      <div>
        <h1>
          {original_title || name} ({filmYear.slice(0, 4)})
        </h1>
        <p>User score: {(vote_average * 100) / 10}%</p>
        <h2>Overviev</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{}</p>
      </div>
    </Section>
  );
};

export default MovieCard;

/* ContactList.propTypes = {
  visibleContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}; */
