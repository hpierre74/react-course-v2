/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const someSideEffectFunction = () => {};

export const StatelessComponent = ({ something }) => {
  const someCustomField = true;
  const someOtherCustomField = something;

  // Side effect with array of dependency
  useEffect(() => {}, []);

  // Side effect running each update
  useEffect(() => {});

  // Side effect with unmount callback
  useEffect(() => {
    return () => {
      // unmount/cleaning logic like "clearInterval(intervalId)"
    };
  }, []);

  return <div></div>;
};

// A Component is just a function getting an optional props object as parameter and returning jsx.
// Furthermore you shouldn't add any logic, side effects or state if you don't really need it.
const ShorterStatelessComponent = ({ something }) => <div>{something}</div>;

// Equivalent of shouldComponentUpdate instead here returning true means no update.
React.memo(StatefulComponent, (prevProps, prevState) => true);

// Creating component as Function(props) {} is the same as const Component = props => {}
export function StatefulComponent({ something }) {
  const [someState, setSomeState] = useState(false);
  const someCustomField = true;

  useEffect(() => {
    if (something) {
      setSomeState(true);
    }
  }, [something]);

  useEffect(() => {
    someSideEffectFunction();
  }, [someState]);

  useEffect(() => {
    return () => {};
  }, []);

  return <div></div>;
}

React.memo(StatefulComponent, (prevProps, prevState) => true);
