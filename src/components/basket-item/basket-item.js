import { decrement, increment, removeFromBasket } from '../../redux/actions';

import Button from '../button';
import { connect } from 'react-redux';
import styles from './basket-item.module.css';

function BasketItem({
  id,
  name,
  increment,
  decrement,
  removeFromBasket,
  price,
  amount,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.buttons}>
        <p>{name}</p>
        <p>Number of portions: {amount}</p>
        <p>Total price: {price * amount}$</p>
        <Button onClick={decrement} data-id="basket-decrement" icon="minus" />
        <Button onClick={increment} data-id="basket-increment" icon="plus" />
        <Button
          onClick={removeFromBasket}
          data-id="basket-increment"
          icon="cross"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.id)),
  increment: () => dispatch(increment(props.id)),
  removeFromBasket: () => dispatch(removeFromBasket(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
