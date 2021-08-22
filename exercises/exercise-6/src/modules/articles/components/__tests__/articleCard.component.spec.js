import React from 'react';

import { shallow } from 'enzyme';

import { ArticleCard } from '../articleCard.component';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

let wrapper;

const article = {
  id: 'abc',
  slug: 'foo',
  name: 'bar',
  year: '1',
  image: 'baz',
  price: 1,
};

const getWrapper = () => shallow(<ArticleCard article={article} />);

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = getWrapper();
});

describe('<ArticleCard />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find(Grid).exists()).toBeTruthy();
      expect(wrapper.find(Card).exists()).toBeTruthy();
      expect(wrapper.find(CardMedia).prop('image')).toBe(article.image);
      expect(wrapper.find(CardContent).find(Typography).first().text()).toBe(
        article.name,
      );
      expect(
        wrapper.find(CardContent).find('div').find(Typography).first().text(),
      ).toBe(article.year);
      expect(
        wrapper.find(CardContent).find('div').find(Typography).last().text(),
      ).toBe(`${article.price} $`);
      expect(wrapper.find(CardActions).find(Button).first().text()).toBe(
        'Lorem',
      );
      expect(wrapper.find(CardActions).find(Button).last().text()).toBe(
        'See more',
      );
    });
  });
});
