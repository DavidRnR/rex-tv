import apiService from '@services/api.service';
import classes from './Episode.module.css';
import { LastEpisodeToAir } from '@models/tvShow';
import noImage from '@assets/images/no-image.jpg';

interface EpisodeProps {
  episode: LastEpisodeToAir;
}

const Episode = ({ episode }: EpisodeProps) => (
  <div className={classes.container}>
    <h4>{`"${episode.name}" - Season ${episode.season_number}`}</h4>
    <label>Release: {episode.air_date}</label>
    <p>{episode.overview}</p>

    <img
      src={
        episode.still_path
          ? `${apiService.config.apiImages}${episode.still_path}`
          : noImage
      }
      alt={episode.name}
    />
  </div>
);

export default Episode;
