import React from 'react';

export const renderOrNothing = (test, CurrentComponent) => {
  const RenderOrNothingHOC = props => <CurrentComponent {...props} />;
  RenderOrNothingHOC.displayName = `RoN(${CurrentComponent.displayName || CurrentComponent.name})`;

  return RenderOrNothingHOC;
};
