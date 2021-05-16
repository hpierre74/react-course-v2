import React from 'react';

import { shallow } from 'enzyme';
import { AppRoutes } from '../routes.component';
import { ROUTES_PATHS_BY_NAMES } from '../../routing.constants';
import { Route } from 'react-router-dom';

jest.mock('../../routing.hooks.js', () => ({ useLoginRedirect: jest.fn() }));

let wrapper;

describe('<AppRoutes />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(shallow(<AppRoutes />)).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    beforeEach(() => {
      wrapper = shallow(<AppRoutes />);
    });

    it('should have routes for all paths', () => {
      expect(
        wrapper
          .find(Route)
          .map(node => node.prop('path'))
          .sort(),
      ).toMatchObject(Object.values(ROUTES_PATHS_BY_NAMES).sort());
    });
  });
});
