import { useEffect, Fragment } from 'react';
import Review from './Review/Review';
import classes from './Reviews.module.css';
import LinearProgress from '@components/ui/LinearProgress/LinearProgress';
import { useTvShowReviews } from '@hooks/useTvShowReviews';

interface ReviewsProps {
  tvShowId: number;
}

const Reviews = ({ tvShowId }: ReviewsProps) => {
  const { loading, reviews, getReviews } = useTvShowReviews();

  useEffect(() => {
    getReviews(tvShowId);
  }, [getReviews, tvShowId]);

  return (
    <Fragment>
      {loading ? (
        <LinearProgress />
      ) : (
        <section className={classes.reviewsContainer}>
          <h1>User Reviews</h1>
          {reviews?.length ? (
            reviews.map((r, i) => <Review key={i} review={r} />)
          ) : (
            <span>No reviews to Show</span>
          )}
        </section>
      )}
    </Fragment>
  );
};

export default Reviews;
