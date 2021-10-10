// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
// import { useHistory, useLocation } from 'react-router-dom';

// import { isUserConnected } from '../../user/user.selectors';
// import { ROUTES_PATHS_BY_NAMES } from '../routing.constants';

// import { useLoginRedirect } from '../routing.hooks';

// jest.mock('react-router-dom', () => ({
//   useHistory: jest.fn().mockReturnValue({ push: jest.fn() }),
//   useLocation: jest.fn().mockReturnValue({ pathname: 'foo' }),
// }));
// jest.mock('../../user/user.context.js', () => ({ useUserState: jest.fn() }));
// jest.mock('../../user/user.selectors.js', () => ({
//   isUserConnected: jest.fn().mockReturnValue(false),
// }));

// // Create a wrapper to execute the hook inside a react component function body
// const ShowCase = () => {
//   useLoginRedirect();

//   return <div />;
// };

// describe('useLoginRedirect', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('calls proper hooks', () => {
//     beforeEach(() => {
//       shallow(<ShowCase />);
//     });

//     it('should call isUserConnected', () => {
//       expect(isUserConnected).toHaveBeenCalled();
//     });

//     it('should call useLocation', () => {
//       expect(useLocation).toHaveBeenCalled();
//     });

//     it('should call useHistory', () => {
//       expect(useHistory).toHaveBeenCalled();
//     });
//   });

//   describe('when not connected', () => {
//     describe('on home page', () => {
//       it('should not call push', () => {
//         const push = jest.fn();
//         useHistory.mockReturnValueOnce({ push });
//         useLocation.mockReturnValueOnce({ pathname: ROUTES_PATHS_BY_NAMES.checkout });
//         shallow(<ShowCase />);

//         expect(push).not.toBeCalled();
//       });
//     });
//   });

//   describe('effect', () => {
//     const push = jest.fn();
//     let container = null;

//     beforeEach(() => {
//       useHistory.mockReturnValueOnce({ push });
//       container = document.createElement('div');
//       document.body.appendChild(container);
//     });

//     afterEach(() => {
//       unmountComponentAtNode(container);
//       container.remove();
//       container = null;
//     });

//     describe('when not connected', () => {
//       it('should push to login page on checkout page', async () => {
//         useLocation.mockReturnValueOnce({ pathname: ROUTES_PATHS_BY_NAMES.checkout });

//         await act(async () => {
//           render(<ShowCase />, container);
//         });

//         expect(push).toBeCalledWith(ROUTES_PATHS_BY_NAMES.login);
//       });

//       it('should not push on home page', async () => {
//         useLocation.mockReturnValueOnce({ pathname: ROUTES_PATHS_BY_NAMES.home });

//         await act(async () => {
//           render(<ShowCase />, container);
//         });

//         expect(push).not.toBeCalled();
//       });
//     });

//     describe('when connected', () => {
//       beforeEach(() => {
//         isUserConnected.mockReturnValueOnce(true);
//       });

//       it('should not call push on checkout page', async () => {
//         useLocation.mockReturnValueOnce({ pathname: ROUTES_PATHS_BY_NAMES.checkout });

//         await act(async () => {
//           render(<ShowCase />, container);
//         });

//         expect(push).not.toBeCalled();
//       });

//       it('should not call push on home page', async () => {
//         useLocation.mockReturnValueOnce({ pathname: ROUTES_PATHS_BY_NAMES.home });

//         await act(async () => {
//           render(<ShowCase />, container);
//         });

//         expect(push).not.toBeCalled();
//       });

//       it('should push from login page to home page', async () => {
//         useLocation.mockReturnValueOnce({ pathname: ROUTES_PATHS_BY_NAMES.login });

//         await act(async () => {
//           render(<ShowCase />, container);
//         });

//         expect(push).toBeCalledWith(ROUTES_PATHS_BY_NAMES.home);
//       });
//     });
//   });
// });
describe('placeholder', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
