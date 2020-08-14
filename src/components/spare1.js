// You can live edit this code below the import statements
import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

class spare1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <LightSpeed left opposite collapse when={this.state.show}>
          <h1>React Reveal</h1>
        </LightSpeed>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
        >
          { this.state.show ? 'Hide' : 'Show' } Message
        </button>
      </div>
    );
  }
}

export default spare1;