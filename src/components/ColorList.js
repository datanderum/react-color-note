import React, { Component } from 'react';
import './ColorList.css';
import ColorBox from './ColorBox';

class ColorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['DarkRed','Red','OrangeRed','Yellow','Chartreuse','Lime','Aqua','SkyBlue','Blue','Bluer','Indigo']
    };
  }

  renderColors() {
    return this.state.colors.map((name, index) => (
      <ColorBox index={index} name={name}/>
    ));
  }

  render() {
    return (
      <div className="ColorList">
        {this.renderColors()}
      </div>
    );
  }
}

export default ColorList;