import Basket from '../basket';
import Header from '../header';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Restaurants from '../restaurants';
import { restaurants } from '../../fixtures';

const menu = Array.prototype.concat.apply(
  [],
  restaurants.flatMap((m) => [m.menu])
);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Basket menu={menu} />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
