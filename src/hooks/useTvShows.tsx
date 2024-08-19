import { useCallback } from 'react';
import apiService from '@services/api.service';
import useTvShowsStore from '@store/tvShowsStore';

export const useTvShows = () => {
  const loading = useTvShowsStore((state) => state.loading);
  const shows = useTvShowsStore((state) => state.shows);
  const show = useTvShowsStore((state) => state.showSelected);
  const setLoading = useTvShowsStore((state) => state.setLoading);
  const setTvShows = useTvShowsStore((state) => state.setTvShows);
  const setTvShow = useTvShowsStore((state) => state.setTvShow);

  const getTvShows = useCallback(
    async (query: string) => {
      setLoading(true);
      try {
        const response = await apiService.httpGet('/search/tv', { query });
        setTvShows(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setTvShows],
  );

  const getTvShowById = useCallback(
    async (id: number | string) => {
      setLoading(true);
      try {
        const show = await apiService.httpGet(`/tv/${id}`);
        setTvShow(show);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setTvShow],
  );

  const clearTvShows = useCallback(() => {
    setTvShows([]);
  }, [setTvShows]);

  return {
    clearTvShows,
    getTvShowById,
    getTvShows,
    loading,
    shows,
    show,
  };
};
