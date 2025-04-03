import { Review as ReviewType } from "../../types/review";
import Review from "../review/review";

type ReviewListProps = {
  reviews: ReviewType[];
};

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewList;
