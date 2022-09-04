import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-actions';
import Review from '../review/review';


function FilmReviews(): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);
  const filmId = useAppSelector((state) => state.film.id);

  useEffect(() => {
    dispatch(fetchReviews(filmId));
  }, [filmId, dispatch]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {(reviews.length === 0)
          ? 'There is no reviews. Sign in and press \'Add review\' button to add yours!'
          : reviews.map((review) => (
            <Review
              key={review.id}
              comment={review.comment}
              name={review.user.name}
              rating={review.rating}
              date={review.date}
            />
          ))}
      </div>
    </div>
  );
}

export default FilmReviews;
