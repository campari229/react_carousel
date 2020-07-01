import React from 'react';
import PropTypes from 'prop-types';

import { CarouselList } from './CarouselList/CarouselList';
import { Buttons } from './Buttons/Buttons';

import './Carousel.css';

export class Carousel extends React.Component {
  state = {
    imgPosition: 0,
    step: 3,
    animationDuration: 1000,
    listItemWidth: 130,
  }

  moveRight = () => {
    const numberOfItems = this.props.images.length;
    const position = this.state.imgPosition;
    const width = this.state.listItemWidth;
    const steps = this.state.step;

    if (position
      <= -((numberOfItems - steps - (numberOfItems % steps)) * width)) {
      this.setState(({
        imgPosition:
        -(width * (numberOfItems - steps)),
      }));
    } else {
      this.setState(prevState => ({
        imgPosition: prevState.imgPosition - (steps * width),
      }));
    }
  }

  moveLeft = () => {
    const position = this.state.imgPosition;
    const width = this.state.listItemWidth;
    const steps = this.state.step;

    if (position
      >= -(steps * width)) {
      this.setState(({
        imgPosition: 0,
      }));
    } else {
      this.setState(prevState => ({
        imgPosition: prevState.imgPosition + (steps * width),
      }));
    }
  }

  render() {
    const { images } = this.props;
    const transformStyle = {
      transform: `translateX(${this.state.imgPosition}px)`,
      transition: `transform ${this.state.animationDuration}ms`,
    };

    return (
      <div
        className="Carousel"
        style={
          { width: `${(this.state.listItemWidth * this.state.step) + 30}px` }
        }
      >
        <CarouselList images={images} transform={transformStyle} />
        <Buttons moveLeft={this.moveLeft} moveRight={this.moveRight} />
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
