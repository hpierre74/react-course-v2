/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// A PureComponent is not supposed to re-render
// Here we specify when it should re-render specifically
class Component extends React.PureComponent {
  shouldComponentUpdate(prevProps, prevState) {
    // Force re-render when children change
    if (this.props.children !== prevProps.children) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        <h1>Some list</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

const SomeComponent = ({ name }) => <div>{name}</div>;

// A Component is supposed to re-render when its state change
// Or when a props used in the render function change
// Here we specify that it should not re-render when it changes
class ComponentWithChild extends React.Component {
  shouldComponentUpdate(prevProps, prevState) {
    // Avoid re-render for props name
    if (this.props.name !== prevProps.name) {
      return false;
    }

    return false;
  }

  render() {
    return (
      <div>
        <h1>Some list</h1>
        <SomeComponent name={this.props.name} />
      </div>
    );
  }
}

export default Component;
