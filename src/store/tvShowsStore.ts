import { create } from 'zustand';
import { Show, ShowDetails } from '@models/tvShow';

interface TvShowsState {
  loading: boolean;
  shows: Show[];
  showSelected: ShowDetails | null;
  setLoading: (loading: boolean) => void;
  setTvShow: (tvShow: ShowDetails) => void;
  setTvShows: (tvShows: Show[]) => void;
}

const useTvShowsStore = create<TvShowsState>((set) => ({
  loading: false,
  loadingReviews: false,
  reviews: [],
  shows: [],
  showSelected: null,
  setLoading: (loading) => {
    set((state) => ({ ...state, loading }));
  },
  setTvShows: (shows) => {
    set((state) => ({ ...state, shows }));
  },
  setTvShow: (showSelected) => {
    set((state) => ({ ...state, showSelected }));
  },
}));

export default useTvShowsStore;
