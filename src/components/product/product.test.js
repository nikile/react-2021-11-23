import Enzyme, { mount } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const selectors = {
  product: '[data-id="product"]',
  amount: '[data-id="product-amount"]',
  increment: 'button[data-id="product-increment"]',
  decrement: 'button[data-id="product-decrement"]',
};

const product = restaurants[0].menu[0];

function render(props) {
  const wrapper = mount(<Product product={product} {...props} />);
  return {
    getProductsCount: () => wrapper.find(selectors.product).length,
    getAmount: () => wrapper.find(selectors.amount).text(),
    increase: () => wrapper.find(selectors.increment).simulate('click'),
    decrease: () => wrapper.find(selectors.decrement).simulate('click'),
  };
}

describe('Product', () => {
  it('should render', () => {
    const toolKit = render();
    expect(toolKit.getProductsCount()).toBe(1);
  });

  it('should init from 0 amount', () => {
    const toolKit = render();
    expect(toolKit.getAmount()).toBe('0');
  });

  it('should increment amount', () => {
    const toolKit = render({ initialCount: 1 });
    toolKit.increase();
    expect(toolKit.getAmount()).toBe('2');
  });

  it('should decrement amount', () => {
    const toolKit = render({ initialCount: 1 });
    toolKit.decrease();
    expect(toolKit.getAmount()).toBe('0');
  });

  it('should fetch data on mount', () => {
    const fn = jest.fn();
    render({ fetchData: fn });
    expect(fn).toBeCalledWith(product.id);
  });
});
