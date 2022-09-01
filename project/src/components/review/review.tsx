import { parseDate } from '../../tools';

type ReviewProps = {
  comment: string;
  rating: number;
  name: string;
  date: string;
}

function Review({comment, rating, name, date}: ReviewProps): JSX.Element {
  const dateString = parseDate(new Date(date));
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {dateString}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
