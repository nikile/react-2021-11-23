import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
};

const Button = ({ icon, ...props }) => {
  const Icon = icons[icon];
  return (
    <button className={styles.button} {...props}>
      {Icon && <Icon />}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
};

export default Button;
