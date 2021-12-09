import Enzyme, { mount } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

const selectors = {
  star: 'svg[data-id="full-star"]',
  review: '[data-id="review"]',
  user: '[data-id="user"]',
  text: '[data-id="text"]',
};

function render(props) {
  const wrapper = mount(<Review {...props} />);
  return {
    getStarNum: () => wrapper.find(selectors.star).length,
    getReviewNum: () => wrapper.find(selectors.review).length,
    getUser: () => wrapper.find(selectors.user).text(),
    getText: () => wrapper.find(selectors.text).text(),
  };
}

describe('Review', () => {
  it('should render', () => {
    const testKit = render(review);
    expect(testKit.getReviewNum()).toBe(1);
  });

  it('should be 5 rating', () => {
    const testKit = render(review);
    expect(testKit.getStarNum()).toBe(5);
  });

  it('checking username', () => {
    const testKit = render(review);
    expect(testKit.getUser()).toBe(review.user);
  });

  it('checking default username', () => {
    const testKit = render({ rating: 5 });
    expect(testKit.getUser()).toBe('Anonymous');
  });

  it('checking text', () => {
    const testKit = render(review);
    expect(testKit.getText()).toBe(review.text);
  });
});
