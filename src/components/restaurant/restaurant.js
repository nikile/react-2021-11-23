import Banner from '../banner';
import Menu from '../menu';
import PropTypes from 'prop-types';
import Rate from '../rate';
import Reviews from '../reviews';
import styles from './restaurant.module.css';
import { useMemo } from 'react';

const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu key={id} menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

// const mapStateToProps = (state, props) => ({
//   amount: state.order[props.product.id] || 0,
// });

// const mapDispatchToProps = {
//   decrement,
//   increment,
// };

// const mapDispatchToProps = (dispatch, props) => ({
//   decrement: () => dispatch(decrement(props.product.id)),
//   increment: () => dispatch(increment(props.product.id)),
// });
export default Restaurant;
