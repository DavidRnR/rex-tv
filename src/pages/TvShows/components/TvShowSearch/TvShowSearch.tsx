import { FormEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import customClasses from './TvShowSearch.module.css';
import { useTvShows } from '@hooks/useTvShows';

const TvShowSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const { clearTvShows, getTvShows } = useTvShows();

  useEffect(() => {
    query ? getTvShows(query) : clearTvShows();
  }, [clearTvShows, getTvShows, query]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tvShowInput = (event.target as HTMLFormElement)
      .tvShow as HTMLInputElement;
    const nextQuery = tvShowInput.value;
    if (nextQuery) {
      setSearchParams((params) => {
        params.set('query', nextQuery);
        return params;
      });
    }
  };

  return (
    <section className={customClasses.formContainer}>
      <form className={customClasses.searchForm} onSubmit={onSubmit}>
        <input
          name="tvShow"
          placeholder="Search Tv Shows"
          aria-label="Search tv shows"
          defaultValue={query || ''}
        />
        <button type="submit" aria-label="search" title="Search TV Shows">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </section>
  );
};

export default TvShowSearch;
