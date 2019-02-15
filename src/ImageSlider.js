import React from 'react';

export default class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }

  render(){
    let CURRENT_SLIDE = this.state.currentSlideIndex;
<<<<<<< HEAD

    return(
      <div>I am on slide {CURRENT_SLIDE}</div>
=======
    let temp = (CURRENT_SLIDE > 0) ? `I am on slide ${CURRENT_SLIDE}` : 'Boom!'

    return(
      <div>{temp}</div>
>>>>>>> 6af05e9b627b103a85a6e53f474ffbc53e843ec7
    )
  }
}
