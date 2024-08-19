import { ShowReview } from '@models/tvShow';

interface ReviewProps {
  review: ShowReview;
}

const Review = ({ review }: ReviewProps) => (
  <div>
    <div>
      <h3>Written by {review.author}</h3>
      <p>{review.content}</p>
    </div>
  </div>
);

export default Review;
