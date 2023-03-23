import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'


const StarRating = ({ rating }) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = MAX_STARS - fullStars - halfStars;

  const renderStar = (type) => {
    if (type === "full") {
      return <FontAwesomeIcon icon={faStar} beat /> 
      ;
    } else if (type === "half") {
      return <FontAwesomeIcon icon={faStarHalf} beat />;
    } 
  };

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(renderStar("full"));
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(renderStar("half"));
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(renderStar("empty"));
  }

  return <div>{stars}</div>;
};

export default StarRating;
