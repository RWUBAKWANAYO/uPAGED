import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { selectJobs } from '../../actions';
import Navbar from '../navbar/Navbar';
import Pagination from './pagination';
import JobShifts from './JobShifts';

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: null
    };
  }

  componentDidMount() {
    const { selectCurrentJobs } = this.props;
    selectCurrentJobs();
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.selectJobsLoading === true) {
      this.setState({
        data: [...props.selectJobsData.data],
        loading: props.selectJobsLoading
      });
    }
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="job-container">
        <Navbar />
        {
          loading === true && data
            ? (
              <div className="job-wrapper">

                <JobShifts Props={data[0]} />
                <Pagination />

                { data.map((element) => (
                  <div className="jobshifts-cont" id="jobshifts-cont" key={element._id}>
                    <div className="jobs-card">
                      <div className="jobs-card-first-child">
                        <h5>Tue 22 Apr</h5>
                        <p>{element.workingHours}</p>
                        <p>{element.position}</p>
                        <h5>{element.salary}</h5>
                      </div>
                      <div className="jobs-card-second-child">
                        <div>
                          <h5>{element.company}</h5>
                          <div className="rating-wrapper">
                            {[...Array(parseInt(element.review, 10))].map(() => (
                              <i className="fa-solid fa-star" key={Math.random()} />
                            ))}
                          </div>
                          <p>{element.street}</p>
                          <p>{element.address}</p>
                        </div>
                        <div>
                          <button type="button" className="apply-button">
                            APPLY
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
            : null
      }
      </div>
    );
  }
}

Jobs.defaultProps = {
  selectJobsData: {},
  selectJobsLoading: false,
  selectCurrentJobs: PropTypes.func,
};

Jobs.propTypes = {
  selectJobsData: PropTypes.shape(),
  selectJobsLoading: PropTypes.bool,
  selectCurrentJobs: PropTypes.func,
};

const mapStateToProps = ({ selectJobsInitialState, }) => (
  {
    selectJobsLoading: selectJobsInitialState.loading,
    selectJobsData: selectJobsInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    selectCurrentJobs: () => {
      dispatch(selectJobs());
    },

  });
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
