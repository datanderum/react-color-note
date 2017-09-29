import React, { Component } from 'react';
import './color.css';
import * as colorHelper from './../utils/ColorHelper.js';

console.log(colorHelper.hexStringToRgbObj('FF0000'));

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

var configs = {
  keyMap: {
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9",
    "10":"0",
    "11":"-",
    "12":"+",
  },
  colorInfo: {
    "DarkRed": {"hex":"AE0000", "freq":370, "note": ""},
    "Red": {"hex":"FF0000", "freq":415, "note": ""},
    "OrangeRed": {"hex":"FF6600", "freq":440, "note": ""},
    "Yellow": {"hex":"FFEF00", "freq":466, "note": ""},
    "Chartreuse": {"hex":"99FF00", "freq":494, "note": ""},
    "Lime": {"hex":"28FF00", "freq":523, "note": ""},
    "Aqua": {"hex":"00FFF2", "freq":554, "note": ""},
    "SkyBlue": {"hex":"AE0000", "freq":587, "note": ""},
    "Blue": {"hex":"007AFF", "freq":622, "note": ""},
    "Bluer": {"hex":"4700ED", "freq":659, "note": ""},
    "Indigo": {"hex":"6300B2", "freq":698, "note": ""},
  }
//   NOTE	FREQ (HZ)	+40 OCT. (THZ)	WAVELENGTH (NM)	R	G	B	COLOR	HTML NAME
// F♯4	370	407	737	174	0	0		dark red
// G4	392	431	696	255	0	0		red
// G♯4	415	457	657	255	0	0		red
// A4	440	484	620	255	102	0		orange-red
// B♭4	466	513	585	255	239	0		yellow
// B4	494	543	552	153	255	0		chartreuse
// C5	523	575	521	40	255	0		lime
// C♯5	554	610	492	0	255	242		aqua
// D5	587	646	464	0	122	255		sky blue
// D♯5	622	684	438	5	0	255		blue
// E5	659	725	414	71	0	237		blue
// F5	698	768	390	99	0	178		indigo

};

class ColorBox extends Component {
  render() {
    let colorName = this.props.name;
    let keyToWatch = parseInt(this.props.index) + 1;
    let colorFreq = configs.colorInfo[colorName].freq;

    // TODO if not in bgColors array, find nearest color and use that value

    return (
      <div className="ColorBox" style={{backgroundColor: bgColors[colorName]}}>
        <div>{this.props.name}</div>
        <div>f:{colorFreq}Hz</div>
        <div>key:{configs.keyMap[keyToWatch]}</div>
      </div>
    );
  }
}

export default ColorBox;

// var props = Object.keys(this.props.profile).map(function(key, index, value) {
//
//   console.log(key);  ### gives me index
//   console.log(index);  ### undefined
//   console.log(key[value]);  ### gives me data, but a label name, not the
//   actually value
//   console.log(index[value]); ##undefined
//
//   if ([key[value]) {
//     return (
//       <li className="list-group-item">
//         <label>{key}</label>{[value]}
//       </li>
//     );
//   }
//
// })