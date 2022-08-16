import { useState, ChangeEvent } from 'react';
import ReviewStar from '../review-star/review-star';
import { MAX_RATING } from '../../const';

const stars: number[] = [];
for (let i = MAX_RATING; i > 0; i--) {
  stars.push(i);
}

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(8);
  const [comment, setComment] = useState('');

  const ratingChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setRating(parseInt(e.target.value, 10));
  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {stars.map((starNumber) => <ReviewStar key={starNumber} starNumber={starNumber} rating={rating} inputHandler={ratingChangeHandler}/>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={textChangeHandler} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
