import React from 'react'
import Typed from 'typed.js'

class TypedReact extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace:true,
      loop:true,
      loopCount: Infinity
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

export default TypedReact