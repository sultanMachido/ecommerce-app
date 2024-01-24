"use client";
import Rating from "@material-ui/lab/Rating";

type RatingProps = {
  value: number;
};

const StarRating = ({ value }: RatingProps) => {
  return <Rating name="read-only" value={value} readOnly />;
};

export default StarRating;
