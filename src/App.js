import React from 'react';
import './App.css';

import { Carousel } from './components/Carousel';

class App extends React.Component {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
  };

  render() {
    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>Carousel with {this.state.images.length} images</h1>

        <Carousel images={this.state.images} />
      </div>
    );
  }
}

export default App;
