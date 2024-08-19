import { create } from 'zustand';
import { ShowReview } from '@models/tvShow';

interface TvShowReviewState {
  loading: boolean;
  reviews: ShowReview[];
  setLoading: (loading: boolean) => void;
  setTvShowReviews: (reviews: ShowReview[]) => void;
}

const useTvShowReviewStore = create<TvShowReviewState>((set) => ({
  loading: false,
  reviews: [],
  setLoading: (loading) => {
    set((state) => ({ ...state, loading }));
  },
  setTvShowReviews: (reviews) => {
    set((state) => ({ ...state, reviews }));
  },
}));

export default useTvShowReviewStore;
