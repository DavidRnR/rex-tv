import { useCallback } from 'react';
import apiService from '@services/api.service';
import useTvShowReviewStore from '@store/tvShowReviewsStore';

export const useTvShowReviews = () => {
  const loading = useTvShowReviewStore((state) => state.loading);
  const reviews = useTvShowReviewStore((state) => state.reviews);
  const setLoading = useTvShowReviewStore((state) => state.setLoading);
  const setTvShowReviews = useTvShowReviewStore(
    (state) => state.setTvShowReviews,
  );

  const getReviews = useCallback(
    async (tvShowId: number) => {
      setLoading(true);
      try {
        const response = await apiService.httpGet(`/tv/${tvShowId}/reviews`);
        setTvShowReviews(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setTvShowReviews],
  );

  return {
    getReviews,
    loading,
    reviews,
  };
};
