import { ChangeEvent } from 'react';

type ReviewStarProps = {
  isDisabled: boolean;
  starNumber: number;
  rating: number;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ReviewStar({isDisabled, starNumber, rating, inputHandler}: ReviewStarProps): JSX.Element {
  return (
    <>
      <input
        disabled={isDisabled}
        className="rating__input"
        id={`star-${starNumber}`}
        type="radio"
        name="rating"
        value={starNumber}
        checked={rating === starNumber}
        onChange={inputHandler}
      />
      <label className="rating__label" htmlFor={`star-${starNumber}`}>Rating {starNumber}</label>
    </>
  );
}

export default ReviewStar;
