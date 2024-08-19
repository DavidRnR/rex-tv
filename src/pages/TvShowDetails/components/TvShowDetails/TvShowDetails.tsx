import apiService from '@services/api.service';
import { ShowDetails } from '@models/tvShow';
import noImage from '@assets/images/no-image.jpg';
import Rate from '../Rate/Rate';
import Episode from '../Episode/Episode';
import classes from './TvShowDetails.module.css';

interface TvShowDetailsProps {
  tvShowDetail: ShowDetails;
}

const TvShowDetails = ({ tvShowDetail }: TvShowDetailsProps) => (
  <div className={classes.detailContainer}>
    <img
      className={classes.poster}
      src={
        tvShowDetail.poster_path
          ? `${apiService.config.apiImages}${tvShowDetail.poster_path}`
          : noImage
      }
      alt={tvShowDetail.name}
    />

    <section>
      <div className={classes.detailHeader}>
        <h1>{tvShowDetail.name}</h1>
        <Rate rateValue={tvShowDetail.vote_average} />
      </div>
      <div className={classes.detailSubHeader}>
        <h3>
          Seasons: {tvShowDetail.number_of_seasons} | Episodes:{' '}
          {tvShowDetail.number_of_episodes}
        </h3>
        <a
          href={tvShowDetail.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Web
        </a>
      </div>

      <div className={classes.detailRelease}>
        Release: {tvShowDetail.first_air_date}
      </div>

      <div className={classes.detailGenres}>
        {tvShowDetail.genres.map((g, i) => (
          <h4 key={i}>{g.name}</h4>
        ))}
      </div>

      <div>{tvShowDetail.overview}</div>

      <hr></hr>
      <h3>Last Episode</h3>
      <Episode episode={tvShowDetail.last_episode_to_air} />
    </section>
  </div>
);

export default TvShowDetails;
