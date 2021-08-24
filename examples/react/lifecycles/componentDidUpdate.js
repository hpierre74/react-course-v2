/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';

// componentDidUpdate is triggered on every re-render, props or state changes

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  // sometimes, componentDidMount is triggered before receiving props
  componentDidMount() {
    // At this time, `this.props.shouldFetch` = null
  }

  // componentDidUpdate is triggered each time a prop or state value changes.
  // You must be careful to add conditions to prevent infinite loops here
  // For example, we update the state below, causing componentDidUpdate to be triggered again
  // It is another place for side-effects (fetching, subscriptions and so on)
  async componentDidUpdate(prevProps, prevState) {
    // The list is not empty and we should not fetch
    if (this.state.list.length !== 0 || !this.props.shouldFetch) {
      // Return early if we don't want to do anything
      return;
    }

    // Code that will be executed each time the component update
    const list = await request.get('url');
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>Some list</h1>
        <ul>
          {list.map(listItem => (
            <div key={listItem.name}>
              <h3>{listItem.name}</h3>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

Component.defaultProps = {
  shouldFetch: null,
};

Component.propTypes = {
  shouldFetch: PropTypes.bool,
};

export default Component;
