import React, { Component } from 'react';

export default class Gif extends Component {
  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    const src = `https://media3.giphy.com/media/${id}/200w.gif`;
    return (
      <div role="presentation" onClick={this.handleClick}>
        <img src={src} alt="" className="gif" />
      </div>
    );
  }
}
