import React, { Component } from 'react';
import Gif from './gif';

export default class GifList extends Component {
  renderList = () => {
    const { gifs, selectGif } = this.props;
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}
