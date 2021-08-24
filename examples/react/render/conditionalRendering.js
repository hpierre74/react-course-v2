import React, { Component } from 'react';

const truthy = true;
export default class ConditionalRendering extends Component {
  render() {
    // Be aware that the value may change
    // a Component itself may only return null instead of any jsx
    return (
      <div>
        {true && <p>In DOM paragraph</p>}
        {'abc' && <p>In DOM paragraph</p>}
        {1 && <p>In DOM paragraph</p>}
        {{} && <p>In DOM paragraph</p>}
        {truthy && <p>In DOM paragraph</p>}

        {false && <p>Not in DOM paragraph</p>}
        {null && <p>Not in DOM paragraph</p>}
        {undefined && <p>Not in DOM paragraph</p>}
        {0 && <p>Not in DOM paragraph</p>}

        {truthy ? <p>In DOM paragraph</p> : <p>Not in DOM paragraph</p>}
      </div>
    );
  }
}
