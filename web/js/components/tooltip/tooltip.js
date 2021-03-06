
import React from 'react';
import PropTypes from 'prop-types';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  mouseOver() {
    this.setState({
      hovered: true,
    });
  }

  mouseOut() {
    this.setState({
      hovered: false,
    });
  }

  onClick(str) {
    const { onClick } = this.props;
    onClick(str);
  }

  render() {
    const { text, dataArray } = this.props;
    const { hovered } = this.state;
    return (
      <div
        onMouseEnter={this.mouseOver.bind(this)}
        onMouseLeave={this.mouseOut.bind(this)}
        className="wv-tooltip-case"
      >
        <span>{text}</span>
        <div
          className="wv-tooltip"
          style={hovered ? { visibility: 'visible' } : {}}
        >
          <ul>
            {dataArray.map((dataEl, i) => (
              <li
                /* eslint react/no-array-index-key: 1 */
                key={`tooltip-${dataEl}-${i}`}
                id={dataEl}
                onClick={this.onClick.bind(this, dataEl)}
              >
                {dataEl}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Tooltip;
