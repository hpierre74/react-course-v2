import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  primary: 'black',
  secondary: 'pink',
  disabled: 'grey',
};

// We create a prop selector to reuse styling logic
// The function will be called by reference with the props object
// so we don't write an arrow function inside our css
const getColorVariant = ({ variant }) => colors[variant] || colors.primary;

// ButtonBase is a React Component
const ButtonBase = styled.button`
  padding: 4px 8px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2em;
  color: ${getColorVariant};
`;

// styled() can take another component as parameter and modify its css
const BorderedButton = styled(ButtonBase)`
  border: 1px solid ${getColorVariant};
  border-radius: 4px;
`;

// PopUp gets a `visible` prop bool which controls its `display` css property
// Same logic as `getColorVariant` selector, but inside the template string, this is called with props
const PopUp = styled.div`
  width: 400;
  height: 300;
  margin: 2em;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: 'space-around';
  flex-direction: row;
`;

const Component = ({ shouldDisplayPopup }) => {
  return (
    <PopUp visible={shouldDisplayPopup}>
      <ButtonBase variant="primary">Do something</ButtonBase>
      <BorderedButton variant="secondary">Do something else</BorderedButton>
    </PopUp>
  );
};

Component.propTypes = {
  shouldDisplayPopup: PropTypes.bool.isRequired,
};

export default Component;
