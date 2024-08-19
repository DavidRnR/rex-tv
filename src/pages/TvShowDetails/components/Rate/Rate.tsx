import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './Rate.module.css';

interface RateProps {
  rateValue: number;
}

const Rate = ({ rateValue }: RateProps) => (
  <div className={classes.detailRating}>
    <FontAwesomeIcon icon={faStar} className={classes.starRate} />
    <h2>{rateValue.toFixed(1)}</h2>
    <h4>/10</h4>
  </div>
);

export default Rate;
