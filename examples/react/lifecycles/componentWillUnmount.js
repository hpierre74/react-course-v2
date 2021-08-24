import React from 'react';

class Component extends React.Component {
  timeoutId = null;
  // ComponentDidMount is triggered right after the component mounts,
  // it's the right place for side effects like data fetching or subscriptions
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      // do stuff
    }, 5000);
  }

  // Right place to cancel subscriptions
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    // Do additional stuff like dispatching events...
  }

  render() {
    return <div></div>;
  }
}

export default Component;
