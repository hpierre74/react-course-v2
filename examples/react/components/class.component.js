/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, PureComponent } from 'react';

// Classic Component with its lifecycles.
class StatefulComponentClass extends Component {
  constructor(props) {
    // Super is mandatory if you need to access props in the constructor,
    // because props are assigned to the instance after the constructor call.
    super(props);
    this.state = {
      someState: false,
    };
    this.someCustomField = true;
    this.someOtherCustomField = props.something;
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(prevProps, prevState) {}

  customInstanceMethod = () => {};

  render() {
    this.customInstanceMethod();

    return <div></div>;
  }
}

// PureComponents doesn't re-render unless clearly specified in shouldComponentUpdate
// It often leads to hard debugging but can improve performance.
// Generally use functional components with a React.memo() wrapper to get the same behaviour.
class StatefulPureComponentClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      someState: false,
    };
    this.someCustomField = true;
    this.someOtherCustomField = props.something;
  }

  // You can still add Static properties if you'd like
  someCustomField = true;
  someOtherCustomField = this.props.something;

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate() {}

  customInstanceMethod = () => {};

  render() {
    this.customInstanceMethod();

    return <div></div>;
  }
}

class StatelessComponentClass extends Component {
  // You can still add Static properties if you'd like
  someCustomField = true;
  // Props are still assigned to this without a constructor
  someOtherCustomField = this.props.something;

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate() {}

  customInstanceMethod = () => {};

  render() {
    this.customInstanceMethod();

    return <div></div>;
  }
}

// Here's the only necessary stuff a Class component need
// But in this case prefer a functional component !
class ShortestStatelessComponentClass extends Component {
  render() {
    return <div></div>;
  }
}
