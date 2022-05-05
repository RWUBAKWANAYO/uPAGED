import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <div className="job-date-cont">
        <button type="button">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <span>21 - 28 Apr 2019</span>
        <button type="button">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default Pagination;
