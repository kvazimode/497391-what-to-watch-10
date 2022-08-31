import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-actions';
import Review from '../review/review';


function FilmReviews(): JSX.Element {
  const dispatch = useAppDispatch();
  const {reviews, film} = useAppSelector((state) => state);
  if (reviews.length === 0) {dispatch(fetchReviews(film.id));}

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review key={review.id} comment={review.comment} name={review.user.name} rating={review.rating}/>)}
      </div>
    </div>
  );
}

export default FilmReviews;
