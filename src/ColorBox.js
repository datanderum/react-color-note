import React, { Component } from 'react';
import './color.css';

var bgColors = {
  "DarkRed": "#AE0000",
  "Red": "#FF0000",
  "OrangeRed": "#FF6600",
  "Yellow": "#FFEF00",
  "Chartreuse": "#99FF00",
  "Lime": "#28FF00",
  "Aqua": "#00FFF2",
  "SkyBlue": "#007AFF",
  "Blue": "#0500FF",
  "Bluer": "#4700ED",
  "Indigo": "#6300B2"
};

class ColorBox extends Component {
  render() {
    let colorName = this.props.name;

    // TODO get color info from php backend

    // TODO if not in bgColors array, find nearest color and use that value

    return (
      <div className="ColorBox" style={{backgroundColor: bgColors[colorName]}}>
        {this.props.name}
      </div>
    );
  }
}

export default ColorBox;