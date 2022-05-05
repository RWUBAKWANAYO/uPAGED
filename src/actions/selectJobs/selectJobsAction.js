import axios from 'axios';
import { variables } from '../../helpers';
import { selectJobsTypes } from '../../actionTypes';

export const selectJobs = () => (dispatch) => axios.get(`${variables.SELECT_JOBS_API}`)
  .then((response) => {
    dispatch({
      type: selectJobsTypes.SELECT_JOBS_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: selectJobsTypes.SELECT_JOBS_FAILURE,
      payload: error.response.data
    });
  });
