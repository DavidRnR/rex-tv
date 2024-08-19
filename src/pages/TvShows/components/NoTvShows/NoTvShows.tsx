import customClasses from './NoTvShows.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const NoTvShows = () => (
  <div className={customClasses.noTvShows}>
    <FontAwesomeIcon icon={faInfoCircle} />
    NO TV-SHOWS TO SHOW
  </div>
);

export default NoTvShows;
