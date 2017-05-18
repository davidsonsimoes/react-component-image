import React, { Component } from 'react';
import './App.css';

import Image from './components/Images.js'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <p className="App-intro">          
          <Image 
            name="teste"
            type="jpg"            
            cssClass="className"
            textAlt="Text Alt"
          />
        </p>
      </div>
    );
  }
}

export default App;
