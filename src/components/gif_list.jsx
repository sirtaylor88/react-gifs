import React, { Component } from 'react';
import Gif from './gif';

export default class GifList extends Component {
  renderList = ({ gifs, selectGif }) => {
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList}
      </div>
    );
  }
}
