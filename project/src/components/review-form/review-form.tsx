import { useState, ChangeEvent } from 'react';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    'review-text': ''
  });

  const fieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div onChange={fieldChangeHandler} className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>
            <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>
            <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>
            <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>
            <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>
            <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
            <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>
            <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>
            <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>
            <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>
        <div onChange={fieldChangeHandler} className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={formData['review-text']} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
