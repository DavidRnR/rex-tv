import { useNavigate } from 'react-router-dom';
import customClasses from './TvShow.module.css';
import apiService from '@services/api.service';
import { Show } from '@models/tvShow';
import noImage from '@assets/images/no-image.jpg';

interface TvShowProps {
  tvShow: Show;
}

const TvShow = ({ tvShow }: TvShowProps) => {
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/tvshows/${tvShow.id}`);
  };

  return (
    <div
      className={customClasses.TvShowCard}
      onClick={showDetails}
      title="View More"
    >
      <img
        alt={tvShow.name}
        src={
          tvShow.poster_path
            ? `${apiService.config.apiImages}${tvShow.poster_path}`
            : noImage
        }
        title={tvShow.name}
      />
      <h4>{tvShow.name}</h4>
    </div>
  );
};

export default TvShow;
