import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@components/ui/LinearProgress/LinearProgress';
import TvShowDetails from './components/TvShowDetails/TvShowDetails';
import Reviews from './components/Reviews/Reviews';
import { useTvShows } from '@hooks/useTvShows';

const TvShowDetailsPage = () => {
  const { tvshowId } = useParams();
  const { loading, show, getTvShowById } = useTvShows();

  useEffect(() => {
    tvshowId && getTvShowById(tvshowId);
  }, [getTvShowById, tvshowId]);

  if (loading || !show?.id) {
    return <LinearProgress />;
  }

  return (
    <>
      <TvShowDetails tvShowDetail={show} />
      <Reviews tvShowId={show.id} />
    </>
  );
};

export default TvShowDetailsPage;
