import PropTypes from 'prop-types';
import React, { Component } from 'react';

class JobShifts extends Component {
  render() {
    const { Props } = this.props;
    return (
      <div className="jobshifts-cont">
        <h2>Shifts</h2>
        <h3>You`ve been invited</h3>
        <div className="jobs-card">
          <div className="jobs-card-first-child">
            <h5>Tue 22 Apr</h5>
            <p>{Props.workingHours}</p>
            <p>{Props.position}</p>
            <h5>{Props.salary}</h5>
          </div>
          <div className="jobs-card-second-child">
            <div>
              <h5>{Props.company}</h5>
              <div className="rating-wrapper">
                {[...Array(parseInt(Props.review, 10))].map(() => (
                  <i className="fa-solid fa-star" key={Math.random()} />
                ))}
              </div>
              <p>{Props.street}</p>
              <p>{Props.address}</p>
            </div>
            <div>
              <button type="button" className="decline-button">
                DECLINE
              </button>
              <button type="button" className="apply-button">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobShifts.defaultProps = { Props: [], };

JobShifts.propTypes = { Props: PropTypes.shape(), };

export default JobShifts;
