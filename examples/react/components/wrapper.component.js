/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class WrapperClassComponent extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

const WrapperFunctionalComponent = ({ children }) => <div>{children}</div>;

// Your wrappers may be nested with themselves and so on, as long as they get jsx as children,
// they are simply functions rendering what's inside them
const UsageExample = () => (
  <div>
    <WrapperClassComponent>
      <p>Any JSX</p>
    </WrapperClassComponent>
    <WrapperClassComponent>
      <WrapperClassComponent>
        <p>Any JSX</p>
      </WrapperClassComponent>
    </WrapperClassComponent>
    <WrapperFunctionalComponent>
      <p>Any JSX</p>
    </WrapperFunctionalComponent>
    <WrapperFunctionalComponent>
      <WrapperFunctionalComponent>
        <p>Any JSX</p>
      </WrapperFunctionalComponent>
    </WrapperFunctionalComponent>
  </div>
);
