import React from 'react';
import request from 'superagent';

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.timeoutId = null;
  }
  // ComponentDidMount is triggered right after the component mounts,
  // it's the right place for side effects like data fetching or subscriptions
  async componentDidMount() {
    try {
      const list = await request.get('url');
      this.setState({ list });
    } catch (error) {
      throw new Error('failed to fetch');
    }

    this.timeoutId = setTimeout(() => {
      // do stuff
    }, 5000);
  }

  // Right place to cancel subscriptions
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
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

export default Component;
