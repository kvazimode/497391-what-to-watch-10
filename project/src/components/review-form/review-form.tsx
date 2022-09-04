import { useState, ChangeEvent, FormEvent } from 'react';
import ReviewStar from '../review-star/review-star';
import { FormLimits } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReview } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { setIsReviewPosting } from '../../store/action';

const stars: number[] = [];
for (let i = FormLimits.MAX_RATING; i > 0; i--) {
  stars.push(i);
}

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const filmId = Number(id);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitAvailable, setIsSubmitAvailable] = useState(false);
  const {isReviewPosting, isReviewPostError} = useAppSelector((state) => state);

  const checkForm = () => {
    const isLengthCorrect = comment.length >= FormLimits.MIN_TEXT_LENGTH && comment.length <= FormLimits.MAX_TEXT_LENGTH;
    const isRatingCorrect = rating > 0 && rating <= FormLimits.MAX_RATING;
    setIsSubmitAvailable(isLengthCorrect && isRatingCorrect);
  };

  const ratingChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value, 10));
    checkForm();
  };
  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    checkForm();
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmitAvailable) {
      return;
    }
    dispatch(setIsReviewPosting(true));
    dispatch(postReview({filmId, comment, rating}));
    setComment('');
    setRating(0);
    setIsSubmitAvailable(false);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {stars.map((starNumber) => (
              <ReviewStar
                isDisabled={isReviewPosting}
                key={starNumber}
                starNumber={starNumber}
                rating={rating}
                inputHandler={ratingChangeHandler}
              />)
            )}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            disabled={isReviewPosting}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={comment}
            onChange={textChangeHandler}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isSubmitAvailable}
            >
              Post
            </button>
          </div>
        </div>
        {isReviewPostError && <div className='sign-in__field--error'>Send error. Try again or ask support.</div>}
      </form>
    </div>
  );
}

export default ReviewForm;
