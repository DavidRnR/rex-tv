import { useTvShows } from '@hooks/useTvShows';
import Skeleton from '@components/ui/CardSkeleton/CardSkeleton';
import TvShow from '../TvShow/TvShow';
import NoTvShows from '../NoTvShows/NoTvShows';
import customClasses from './TvShowsList.module.css';

const TvShowsList = () => {
  const { loading, shows } = useTvShows();

  if (loading) {
    return (
      <section className={customClasses.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
          <Skeleton key={s} />
        ))}
      </section>
    );
  }

  return (
    <section className={customClasses.container}>
      {shows?.length ? (
        shows.map((s, i) => <TvShow tvShow={s} key={i} />)
      ) : (
        <NoTvShows />
      )}
    </section>
  );
};

export default TvShowsList;
