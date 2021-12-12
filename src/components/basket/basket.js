import { decrement, increment, removeFromBasket } from '../../redux/actions';

import BasketItem from '../basket-item';
import { connect } from 'react-redux';
import styles from './basket.module.css';

function Basket({ menu, order }) {
  return (
    <div className={styles.basket}>
      {Object.keys(order).map((id) => {
        const menuItem = menu.find((m) => m.id === id);
        return (
          <BasketItem
            key={id}
            id={id}
            name={menuItem.name}
            increment={increment}
            decrement={decrement}
            removeFromBasket={removeFromBasket}
            price={menuItem.price}
            amount={order[id]}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.basket.id)),
  increment: () => dispatch(increment(props.basket.id)),
  removeFromBasket: () => dispatch(removeFromBasket(props.basket.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
