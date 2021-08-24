/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

// Props are "properties" set on a jsx element,
// just like a property with="100" could be set on some html
// You can do the same with any value in jsx like :
// <Component someRandomThing={['a', 1, {}]} otherThing={true} />

// ######## PROPS ARE IMMUTABLE ##########
// You can set a prop in jsx but you can't set it or mutate it in the component
// If you want a mutated version of your props, use the state or make a new constant instead
// const enhancedProps = { ...props, valueToModify: "something" };
// this.setState({ someStateProperty: { ...props, valueToModify: "something" }});

const Hello = props => <div>Hello {props.name}</div>;
const DestructuredHello = ({ name }) => <div>Hello {name}</div>;

// Same goes for Class components
class HelloClass extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// Passing props
const SomeComponent = () => {
  const [name, setName] = React.useState('Mark');
  const someName = 'Henry';

  return (
    <div>
      <Hello name="Luke" />
      <HelloClass name={name} />
      <DestructuredHello name={someName} />
    </div>
  );
};

class SomeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Mark' };
    this.someName = 'Luke';
  }

  render() {
    return (
      <div>
        <Hello name="Henry" />
        <HelloClass name={this.someName} />
        <DestructuredHello name={this.state.name} />
      </div>
    );
  }
}
