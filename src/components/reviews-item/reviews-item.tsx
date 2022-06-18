import { Review } from "../../types/reviews";

type ReviewsItemProps = {
  review: Review;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  // const formatter = new Intl.DateTimeFormat("en", { month: "short" });
  // const month1 = formatter.format(new Date());
  // const month2 = formatter.format(new Date(review.date));
  // console.log(`${month1} and ${month2}`); // current month in French and "juin".
  const date = new Date(review.date); // 2009-11-10
  const monthYear = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  console.log(monthYear);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: review.rating * 20 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.review}</p>
        <time className="reviews__time" dateTime={review.date}>
          {monthYear}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
