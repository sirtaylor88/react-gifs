import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleUpdate = (e) => {
    const { search } = this.props;
    search(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}
